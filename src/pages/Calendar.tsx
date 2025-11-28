import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/components/Button';
import EmptyState from '@/components/EmptyState';
import MealCard from '@/components/MealCard';
import MealDetailsDialog from '@/components/MealDetailsDialog';
import MealFormDrawer, { type MealFormValues } from '@/components/MealFormDrawer';
import Skeleton from '@/components/Skeleton';
import { useCreateMeal, useDeleteMeal, useMealsByDate, useMealsRange, useToggleMeal, useUpdateMeal } from '@/hooks/useMeals';
import type { Meal } from '@/types';
import { buildMonthMatrix, formatDayLabel, getMonthInterval, isSameISODate } from '@/utils/date';

const formatISO = (date: Date) => date.toISOString().slice(0, 10);

export const CalendarPage = () => {
  const [reference, setReference] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(formatISO(new Date()));
  const [detailMeal, setDetailMeal] = useState<Meal | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState<'create' | 'edit'>('create');

  const interval = useMemo(() => getMonthInterval(reference), [reference]);
  const { data: monthMeals = [], isLoading: loadingMonth } = useMealsRange(
    formatISO(interval.start),
    formatISO(interval.end),
    true,
  );
  const { data: dayMeals = [], isLoading: loadingDay } = useMealsByDate(selectedDate);

  const toggleMeal = useToggleMeal();
  const createMeal = useCreateMeal();
  const updateMeal = useUpdateMeal();
  const deleteMeal = useDeleteMeal();

  const matrix = useMemo(() => buildMonthMatrix(reference), [reference]);

  const handleSelectDay = (date: Date) => {
    const iso = formatISO(date);
    setSelectedDate(iso);
  };

  const handleToggle = (meal: Meal) => {
    toggleMeal.mutate({ id: meal.id, consumida: !meal.consumida });
  };

  const handledSelectedLabel = formatDayLabel(selectedDate);

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
        onSuccess: () => setFormOpen(false),
      },
    );
  };

  const handleUpdate = (values: MealFormValues) => {
    if (!detailMeal) return;
    updateMeal.mutate(
      {
        id: detailMeal.id,
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
          setDetailMeal(null);
        },
      },
    );
  };

  const handleDelete = (meal: Meal) => {
    if (!confirm('Deseja remover esta refeição?')) return;
    deleteMeal.mutate(meal.id, {
      onSuccess: () => {
        setDetailOpen(false);
        setDetailMeal(null);
      },
    });
  };

  const dayMealsByDate = useMemo(() => {
    const map = new Map<string, { total: number; consumed: number }>();
    monthMeals.forEach((meal) => {
      const entry = map.get(meal.dia) ?? { total: 0, consumed: 0 };
      entry.total += 1;
      if (meal.consumida) entry.consumed += 1;
      map.set(meal.dia, entry);
    });
    return map;
  }, [monthMeals]);

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <span className="tag">Visão mensal</span>
          <h2>
            {reference.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
          </h2>
          <p>
            Selecione um dia para editar papinhas — saldo do mês: {monthMeals.length} refeições planejadas.
          </p>
        </div>
        <div className="calendar-controls">
          <button onClick={() => setReference((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setReference((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>
            <ChevronRight size={18} />
          </button>
          <Button onClick={() => setFormOpen(true)}>Nova refeição</Button>
        </div>
      </header>

      <div className="calendar-grid glass-card">
        <div className="calendar-weekdays">
          {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        {loadingMonth ? (
          <Skeleton height={300} />
        ) : (
          <div className="calendar-weeks">
            {matrix.map((week, weekIndex) => (
              <div className="calendar-week" key={weekIndex}>
                {week.map((date) => {
                  const iso = formatISO(date);
                  const metrics = dayMealsByDate.get(iso);
                  const isCurrentMonth = date.getMonth() === reference.getMonth();
                  const isSelected = isSameISODate(iso, selectedDate);

                  return (
                    <button
                      type="button"
                      key={iso}
                      onClick={() => handleSelectDay(date)}
                      className={[
                        'calendar-day',
                        !isCurrentMonth ? 'faded' : '',
                        isSelected ? 'selected' : '',
                        metrics?.consumed === metrics?.total && metrics ? 'completed' : '',
                        metrics && metrics.consumed < metrics.total ? 'partial' : '',
                      ].join(' ')}
                    >
                      <span className="label">{date.getDate()}</span>
                      {metrics ? (
                        <span className="dot" data-total={metrics.total} data-consumed={metrics.consumed} />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card glass-card day-detail">
        <header>
          <h3>{handledSelectedLabel.weekday}</h3>
          <span>{handledSelectedLabel.dateLabel}</span>
        </header>

        {loadingDay ? (
          <div className="skeleton-list">
            <Skeleton height={70} />
            <Skeleton height={70} />
          </div>
        ) : dayMeals.length ? (
          <div className="meal-list">
            {dayMeals.map((meal) => (
              <MealCard
                key={meal.id}
                meal={meal}
                onSelect={(item) => {
                  setDetailMeal(item);
                  setDetailOpen(true);
                }}
                onToggle={handleToggle}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="📅"
            title="Nenhuma papinha neste dia"
            description="Selecione outro dia do mês ou adicione uma refeição para esta data."
          />
        )}
      </div>

      <MealDetailsDialog
        meal={detailMeal}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onEdit={(meal) => {
          setFormMode('edit');
          setDetailMeal(meal);
          setFormOpen(true);
        }}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />

      <MealFormDrawer
        open={formOpen}
        mode={formMode}
        initialValues={formMode === 'edit' ? detailMeal ?? undefined : undefined}
        defaultDate={selectedDate}
        onClose={() => setFormOpen(false)}
        onSubmit={formMode === 'edit' ? handleUpdate : handleCreate}
        onDelete={formMode === 'edit' ? () => detailMeal && handleDelete(detailMeal) : undefined}
        loading={createMeal.isPending || updateMeal.isPending}
      />
    </section>
  );
};

export default CalendarPage;

