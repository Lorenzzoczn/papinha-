import * as Dialog from '@radix-ui/react-dialog';
import { Plus, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { FormEvent } from 'react';

import { Button } from './Button';
import type { Meal } from '@/types';

type IngredientInput = {
  nome: string;
  quantidade: string;
  unidade?: string;
};

export type MealFormValues = {
  nome_papinha: string;
  dia: string;
  horario: string;
  tempo_preparo: string;
  porcoes: string;
  ingredientes: IngredientInput[];
  modo_preparo: string;
  dica_nutricional: string;
  consumida: boolean;
};

type MealFormDrawerProps = {
  open: boolean;
  mode: 'create' | 'edit';
  initialValues?: Meal | MealFormValues;
  defaultDate?: string;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (values: MealFormValues) => void;
  onDelete?: () => void;
};

const defaultIngredient: IngredientInput = { nome: '', quantidade: '', unidade: '' };

const mapMealToValues = (meal?: Meal | MealFormValues, fallbackDate?: string): MealFormValues => {
  if (!meal) {
    return {
      nome_papinha: '',
      dia: fallbackDate ?? '',
      horario: '',
      tempo_preparo: '',
      porcoes: '',
      ingredientes: [defaultIngredient],
      modo_preparo: '',
      dica_nutricional: '',
      consumida: false,
    };
  }

  const rawIngredientes = (meal as Meal).ingredientes ?? (meal as MealFormValues).ingredientes ?? [];
  let normalized: IngredientInput[];

  if (typeof rawIngredientes === 'string') {
    try {
      normalized = (JSON.parse(rawIngredientes) as IngredientInput[]) ?? [];
    } catch {
      normalized = [];
    }
  } else if (Array.isArray(rawIngredientes)) {
    normalized = rawIngredientes.map((item: any) => ({
      nome: item.nome ?? '',
      quantidade: item.quantidade ?? '',
      unidade: item.unidade ?? '',
    }));
  } else {
    normalized = [];
  }

  return {
    nome_papinha: meal.nome_papinha ?? '',
    dia: meal.dia ?? fallbackDate ?? '',
    horario: meal.horario?.slice(0, 5) ?? '',
    tempo_preparo: 'tempo_preparo' in meal && meal.tempo_preparo ? String(meal.tempo_preparo) : '',
    porcoes: meal.porcoes ?? '',
    ingredientes: normalized.length ? normalized : [defaultIngredient],
    modo_preparo: meal.modo_preparo ?? '',
    dica_nutricional: meal.dica_nutricional ?? '',
    consumida: 'consumida' in meal ? Boolean(meal.consumida) : false,
  };
};

export const MealFormDrawer = ({
  open,
  mode,
  initialValues,
  defaultDate,
  loading = false,
  onClose,
  onSubmit,
  onDelete,
}: MealFormDrawerProps) => {
  const [form, setForm] = useState<MealFormValues>(mapMealToValues(initialValues, defaultDate));
  const isEdit = mode === 'edit';

  useEffect(() => {
    if (open) {
      setForm(mapMealToValues(initialValues, defaultDate));
    }
  }, [initialValues, defaultDate, open]);

  const ingredientIsEmpty = (ingredient: IngredientInput) =>
    !ingredient.nome && !ingredient.quantidade && !ingredient.unidade;

  const normalizedForm = useMemo(() => {
    const sanitized = form.ingredientes.filter((item) => !ingredientIsEmpty(item));
    return {
      ...form,
      ingredientes: sanitized.length ? sanitized : form.ingredientes,
    };
  }, [form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.nome_papinha.trim() || !form.dia || !form.horario) {
      alert('Preencha nome, dia (AAAA-MM-DD) e horário (HH:MM).');
      return;
    }
    onSubmit(normalizedForm);
  };

  const updateField = (field: keyof MealFormValues, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const updateIngredient = (index: number, field: keyof IngredientInput, value: string) => {
    setForm((prev) => {
      const next = [...prev.ingredientes];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, ingredientes: next };
    });
  };

  const addIngredient = () => {
    setForm((prev) => ({ ...prev, ingredientes: [...prev.ingredientes, { ...defaultIngredient }] }));
  };

  const removeIngredient = (index: number) => {
    setForm((prev) => {
      if (prev.ingredientes.length === 1) return prev;
      return { ...prev, ingredientes: prev.ingredientes.filter((_, i) => i !== index) };
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={(value) => (!value ? onClose() : null)}>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content className="drawer-content">
          <div className="drawer-header">
            <div>
              <Dialog.Title>{isEdit ? 'Editar refeição' : 'Nova refeição'}</Dialog.Title>
              <Dialog.Description>
                Organize papinhas com clareza, ingredientes nutritivos e horários precisos.
              </Dialog.Description>
            </div>
            <button className="drawer-close" onClick={onClose} type="button">
              ×
            </button>
          </div>

          <form className="drawer-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Nome da papinha
                <input
                  value={form.nome_papinha}
                  onChange={(event) => updateField('nome_papinha', event.target.value)}
                  placeholder="Papinha de abóbora com frango"
                  required
                />
              </label>
              <label>
                Dia
                <input
                  value={form.dia}
                  onChange={(event) => updateField('dia', event.target.value)}
                  placeholder="2025-11-01"
                  required
                />
              </label>
              <label>
                Horário
                <input
                  value={form.horario}
                  onChange={(event) => updateField('horario', event.target.value)}
                  placeholder="08:00"
                  required
                />
              </label>
              <label>
                Tempo de preparo (min)
                <input
                  value={form.tempo_preparo}
                  onChange={(event) => updateField('tempo_preparo', event.target.value)}
                  placeholder="10"
                />
              </label>
              <label>
                Porções
                <input
                  value={form.porcoes}
                  onChange={(event) => updateField('porcoes', event.target.value)}
                  placeholder="1 tigela"
                />
              </label>
              <label className="checkbox-field">
                <input
                  type="checkbox"
                  checked={form.consumida}
                  onChange={(event) => updateField('consumida', event.target.checked)}
                />
                Marcar como consumida
              </label>
            </div>

            <section className="ingredientes-section">
              <div className="section-title">
                <h5>Ingredientes</h5>
                <Button type="button" variant="ghost" onClick={addIngredient}>
                  <Plus size={16} />
                  Adicionar ingrediente
                </Button>
              </div>
              <div className="ingredientes-grid">
                {form.ingredientes.map((ingredient, index) => (
                  <div className="ingrediente-card" key={`${ingredient.nome}-${index}`}>
                    <label>
                      Nome
                      <input
                        value={ingredient.nome}
                        onChange={(event) => updateIngredient(index, 'nome', event.target.value)}
                        placeholder="Abóbora cabotiá"
                      />
                    </label>
                    <div className="ingrediente-row">
                      <label>
                        Quantidade
                        <input
                          value={ingredient.quantidade}
                          onChange={(event) => updateIngredient(index, 'quantidade', event.target.value)}
                          placeholder="80"
                        />
                      </label>
                      <label>
                        Unidade
                        <input
                          value={ingredient.unidade ?? ''}
                          onChange={(event) => updateIngredient(index, 'unidade', event.target.value)}
                          placeholder="g"
                        />
                      </label>
                    </div>
                    {form.ingredientes.length > 1 ? (
                      <button type="button" className="remove-ingredient" onClick={() => removeIngredient(index)}>
                        <Trash2 size={16} />
                        Remover
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section className="text-section">
              <label>
                Modo de preparo
                <textarea
                  value={form.modo_preparo}
                  onChange={(event) => updateField('modo_preparo', event.target.value)}
                  rows={4}
                  placeholder="Descreva cada etapa do preparo..."
                />
              </label>
              <label>
                Dica nutricional
                <textarea
                  value={form.dica_nutricional}
                  onChange={(event) => updateField('dica_nutricional', event.target.value)}
                  rows={3}
                  placeholder="Compartilhe uma dica ou benefício nutricional..."
                />
              </label>
            </section>

            <div className="drawer-footer">
              <Button type="submit" loading={loading}>
                {isEdit ? 'Salvar alterações' : 'Criar refeição'}
              </Button>
              <Button type="button" variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
              {isEdit && onDelete ? (
                <Button type="button" variant="danger" onClick={onDelete}>
                  Excluir refeição
                </Button>
              ) : null}
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MealFormDrawer;

