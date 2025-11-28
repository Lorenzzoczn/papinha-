import { useMemo, useState } from 'react';

import { Button } from '@/components/Button';
import EmptyState from '@/components/EmptyState';
import MealCard from '@/components/MealCard';
import MealDetailsDialog from '@/components/MealDetailsDialog';
import MealFormDrawer, { type MealFormValues } from '@/components/MealFormDrawer';
import Skeleton from '@/components/Skeleton';
import { useCreateMeal, useDeleteMeal, useMealsByDate, useToggleMeal, useUpdateMeal } from '@/hooks/useMeals';
import type { Meal } from '@/types';
import { formatDayLabel } from '@/utils/date';

const isoToday = new Date().toISOString().slice(0, 10);

export const TodayPage = () => {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');

  const { data: meals = [], isLoading, refetch, isFetching } = useMealsByDate(isoToday);
  const toggleMeal = useToggleMeal();
  const createMeal = useCreateMeal();
  const updateMeal = useUpdateMeal();
  const deleteMeal = useDeleteMeal();

  const dayMeta = useMemo(() => formatDayLabel(isoToday), []);
  const { total, completed } = useMemo(() => {
    const totalMeals = meals.length;
    const done = meals.filter((meal) => meal.consumida).length;
    return { total: totalMeals, completed: done };
  }, [meals]);

  const handleSelectMeal = (meal: Meal) => {
    setSelectedMeal(meal);
    setDetailOpen(true);
  };

  const handleToggleMeal = (meal: Meal) => {
    toggleMeal.mutate({ id: meal.id, consumida: !meal.consumida });
  };

  const handleCreate = (values: MealFormValues) => {
    createMeal.mutate(
      {
        nome_papinha: values.nome_papinha,
        dia: values.dia,
        horario: values.horario.length === 5 ? `${values.horario}:00` : values.horario,
        tempo_preparo: values.tempo_preparo ? Number(values.tempo_preparo) : null,
        porcoes: values.porcoes,
        ingredientes: values.ingredientes,
        modo_preparo: values.modo_preparo,
        dica_nutricional: values.dica_nutricional,
        consumida: values.consumida,
      } as never,
      {
        onSuccess: () => {
          setFormOpen(false);
        },
      },
    );
  };

  const handleUpdate = (values: MealFormValues) => {
    if (!selectedMeal) return;
    updateMeal.mutate(
      {
        id: selectedMeal.id,
        nome_papinha: values.nome_papinha,
        dia: values.dia,
        horario: values.horario.length === 5 ? `${values.horario}:00` : values.horario,
        tempo_preparo: values.tempo_preparo ? Number(values.tempo_preparo) : null,
        porcoes: values.porcoes,
        ingredientes: values.ingredientes,
        modo_preparo: values.modo_preparo,
        dica_nutricional: values.dica_nutricional,
        consumida: values.consumida,
      } as never,
      {
        onSuccess: () => {
          setFormOpen(false);
          setDetailOpen(false);
          setSelectedMeal(null);
        },
      },
    );
  };

  const handleDelete = (meal: Meal) => {
    if (!confirm('Deseja realmente remover esta refeição?')) {
      return;
    }
    deleteMeal.mutate(meal.id, {
      onSuccess: () => {
        setDetailOpen(false);
        setSelectedMeal(null);
      },
    });
  };

  const openCreate = () => {
    setFormMode('create');
    setSelectedMeal(null);
    setFormOpen(true);
  };

  const openEdit = (meal: Meal) => {
    setFormMode('edit');
    setSelectedMeal(meal);
    setFormOpen(true);
  };

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <span className="tag">{dayMeta.weekday}</span>
          <h2>Plano de hoje</h2>
          <p>
            {dayMeta.dateLabel} • {completed}/{total} refeições concluídas
          </p>
        </div>
        <div className="header-buttons">
          <Button variant="ghost" onClick={() => refetch()} disabled={isFetching}>
            Atualizar
          </Button>
          <Button onClick={openCreate}>Nova refeição</Button>
        </div>
      </header>

      <div className="card glass-card today-card">
        {isLoading ? (
          <div className="skeleton-list">
            <Skeleton height={70} />
            <Skeleton height={70} />
            <Skeleton height={70} />
          </div>
        ) : meals.length ? (
          <div className="meal-list">
            {meals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                onSelect={handleSelectMeal}
                onToggle={handleToggleMeal}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Sem refeições hoje"
            description="Comece adicionando papinhas ao plano diário para acompanhar consumo e nutrição."
          />
        )}
      </div>

      <MealDetailsDialog
        meal={selectedMeal}
        open={detailOpen}
        onOpenChange={(value) => setDetailOpen(value)}
        onDelete={handleDelete}
        onEdit={openEdit}
        onToggle={handleToggleMeal}
      />

      <MealFormDrawer
        open={formOpen}
        mode={formMode}
        initialValues={formMode === 'edit' ? selectedMeal ?? undefined : undefined}
        defaultDate={isoToday}
        onClose={() => setFormOpen(false)}
        onSubmit={formMode === 'edit' ? handleUpdate : handleCreate}
        onDelete={formMode === 'edit' ? () => selectedMeal && handleDelete(selectedMeal) : undefined}
        loading={createMeal.isPending || updateMeal.isPending}
      />
    </section>
  );
};

export default TodayPage;

