import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { mealService, normalizeIngredients } from '@/services/mealService';
import { supabase } from '@/services/supabaseClient';
import type { Meal, Recipe } from '@/types';

export const mealKeys = {
  all: ['meals'] as const,
  byDate: (date: string) => [...mealKeys.all, 'date', date] as const,
  byRange: (start: string, end: string) => [...mealKeys.all, 'range', start, end] as const,
  recipes: ['recipes'] as const,
};

export const useMealsByDate = (date: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: mealKeys.byDate(date),
    queryFn: () => mealService.getMealsByDate(date),
    enabled: Boolean(date),
  });

  useEffect(() => {
    if (!date) return;

    const channel = supabase
      .channel(`refeicoes:${date}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'refeicoes',
          filter: `dia=eq.${date}`,
        },
        (payload) => {
          queryClient.setQueryData<Meal[]>(mealKeys.byDate(date), (prev) => {
            const current = prev ?? [];
            switch (payload.eventType) {
              case 'INSERT': {
                const inserted = payload.new as Meal;
                return [...current.filter((m) => m.id !== inserted.id), inserted].sort((a, b) =>
                  a.horario.localeCompare(b.horario),
                );
              }
              case 'UPDATE': {
                const updated = payload.new as Meal;
                return current
                  .map((meal) => (meal.id === updated.id ? updated : meal))
                  .sort((a, b) => a.horario.localeCompare(b.horario));
              }
              case 'DELETE': {
                const deletedId = payload.old?.id as number;
                return current.filter((meal) => meal.id !== deletedId);
              }
              default:
                return current;
            }
          });
        },
      )
      .subscribe();

  return () => {
      supabase.removeChannel(channel);
    };
  }, [date, queryClient]);

  return query;
};

export const useMealsRange = (start: string, end: string, enabled = true) =>
  useQuery({
    queryKey: mealKeys.byRange(start, end),
    queryFn: () => mealService.getMealsInRange(start, end),
    enabled,
  });

export const useRecipes = () =>
  useQuery({
    queryKey: mealKeys.recipes,
    queryFn: () => mealService.getRecipes(),
    select: (recipes) =>
      recipes.map((recipe) => ({
        ...recipe,
        ingredientes: normalizeIngredients(recipe.ingredientes ?? []),
      })) as Recipe[],
  });

export const useToggleMeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, consumida }: { id: number; consumida: boolean }) => mealService.toggleMeal(id, consumida),
    onMutate: async ({ id, consumida }) => {
      await queryClient.cancelQueries({ queryKey: mealKeys.all });

      const prevSnapshots = queryClient
        .getQueryCache()
        .findAll({ queryKey: mealKeys.all })
        .map((query) => ({ queryKey: query.queryKey, data: query.state.data }));

      prevSnapshots.forEach(({ queryKey, data }) => {
        if (!Array.isArray(data)) return;
        queryClient.setQueryData<Meal[]>(queryKey, (prev) =>
          (prev ?? []).map((meal) => (meal.id === id ? { ...meal, consumida } : meal)),
        );
      });

      return { prevSnapshots };
    },
    onError: (_err, _variables, ctx) => {
      ctx?.prevSnapshots.forEach(({ queryKey, data }) => {
        queryClient.setQueryData(queryKey, data);
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: mealKeys.all });
    },
  });
};

export const useCreateMeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mealService.createMeal,
    onSuccess: (created) => {
      queryClient.invalidateQueries({ queryKey: mealKeys.byDate(created.dia) });
      queryClient.invalidateQueries({ queryKey: mealKeys.recipes });
    },
  });
};

export const useUpdateMeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...payload }: { id: number } & Partial<Meal>) => mealService.updateMeal(id, payload),
    onSuccess: (updated) => {
      queryClient.invalidateQueries({ queryKey: mealKeys.byDate(updated.dia) });
      queryClient.invalidateQueries({ queryKey: mealKeys.recipes });
    },
  });
};

export const useDeleteMeal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => mealService.deleteMeal(id),
    onSuccess: (_data, id) => {
      queryClient
        .getQueryCache()
        .findAll({ queryKey: mealKeys.all })
        .forEach((query) => {
          queryClient.setQueryData<Meal[]>(query.queryKey, (prev) => prev?.filter((meal) => meal.id !== id));
        });
    },
  });
};

