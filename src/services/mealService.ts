import { supabase } from './supabaseClient';
import { guestStorage } from './guestStorage';
import type { Ingredient, Meal, Recipe } from '@/types';

type MealCreatePayload = Omit<Meal, 'id' | 'user_id' | 'created_at' | 'updated_at'>;

const TABLE = 'refeicoes';

const isGuestMode = (): boolean => {
  return localStorage.getItem('papinha-guest-mode') === 'true';
};

export const mealService = {
  async getMealsByDate(date: string): Promise<Meal[]> {
    if (isGuestMode()) {
      return Promise.resolve(guestStorage.getMealsByDate(date));
    }

    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq('dia', date)
      .order('horario', { ascending: true });

    if (error) {
      throw error;
    }

    return (data ?? []) as Meal[];
  },

  async getMealsInRange(start: string, end: string): Promise<Meal[]> {
    if (isGuestMode()) {
      return Promise.resolve(guestStorage.getMealsInRange(start, end));
    }

    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .gte('dia', start)
      .lte('dia', end);

    if (error) throw error;
    return (data ?? []) as Meal[];
  },

  async getRecipes(): Promise<Recipe[]> {
    if (isGuestMode()) {
      return Promise.resolve(guestStorage.getRecipes());
    }

    const { data, error } = await supabase.rpc('list_unique_recipes');

    if (error) {
      if (error.code === '42883') {
        const fallback = await supabase
          .from(TABLE)
          .select('nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional')
          .order('nome_papinha', { ascending: true });
        if (fallback.error) {
          throw fallback.error;
        }
        const map = new Map<string, Recipe>();
        (fallback.data ?? []).forEach((item) => {
          if (!map.has(item.nome_papinha)) {
            map.set(item.nome_papinha, item as Recipe);
          }
        });
        return Array.from(map.values());
      }
      throw error;
    }

    return (data as Recipe[] | null) ?? [];
  },

  async createMeal(payload: MealCreatePayload): Promise<Meal> {
    if (isGuestMode()) {
      return Promise.resolve(guestStorage.createMeal(payload));
    }

    const { data: userData } = await supabase.auth.getUser();
    const userId = userData.user?.id;
    const { data, error } = await supabase
      .from(TABLE)
      .insert({ ...payload, user_id: userId })
      .select()
      .single();
    if (error) throw error;
    return data as Meal;
  },

  async updateMeal(id: number, payload: Partial<MealCreatePayload>): Promise<Meal> {
    if (isGuestMode()) {
      return Promise.resolve(guestStorage.updateMeal(id, payload));
    }

    const { data, error } = await supabase.from(TABLE).update(payload).eq('id', id).select().single();
    if (error) throw error;
    return data as Meal;
  },

  async deleteMeal(id: number): Promise<void> {
    if (isGuestMode()) {
      guestStorage.deleteMeal(id);
      return Promise.resolve();
    }

    const { error } = await supabase.from(TABLE).delete().eq('id', id);
    if (error) throw error;
  },

  async toggleMeal(id: number, consumida: boolean): Promise<Meal> {
    if (isGuestMode()) {
      return Promise.resolve(guestStorage.toggleMeal(id, consumida));
    }

    const { data, error } = await supabase
      .from(TABLE)
      .update({ consumida })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data as Meal;
  },
};

export const normalizeIngredients = (ingredients?: Ingredient[] | string | null): Ingredient[] => {
  if (!ingredients) return [];
  if (Array.isArray(ingredients)) return ingredients;

  try {
    const parsed = JSON.parse(ingredients) as Ingredient[];
    return parsed ?? [];
  } catch {
    return [];
  }
};

