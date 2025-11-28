import * as Dialog from '@radix-ui/react-dialog';
import { Clock3, Edit3, Trash2, Utensils } from 'lucide-react';

import { Button } from './Button';
import { normalizeIngredients } from '@/services/mealService';
import type { Meal } from '@/types';
import { formatTime } from '@/utils/date';

type MealDetailsDialogProps = {
  meal: Meal | null;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onEdit: (meal: Meal) => void;
  onDelete: (meal: Meal) => void;
  onToggle: (meal: Meal) => void;
};

export const MealDetailsDialog = ({ meal, open, onOpenChange, onDelete, onEdit, onToggle }: MealDetailsDialogProps) => {
  if (!meal) return null;
  const ingredients = normalizeIngredients(meal.ingredientes);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title>{meal.nome_papinha}</Dialog.Title>
          <Dialog.Description>
            <Clock3 size={18} /> {formatTime(meal.horario)}
          </Dialog.Description>

          <div className="dialog-section">
            <h5>Resumo</h5>
            <ul>
              {meal.tempo_preparo ? (
                <li>
                  ⏱️ Tempo de preparo: <strong>{meal.tempo_preparo} min</strong>
                </li>
              ) : null}
              {meal.porcoes ? (
                <li>
                  🍽️ Porções: <strong>{meal.porcoes}</strong>
                </li>
              ) : null}
              <li>
                ✅ Consumida: <strong>{meal.consumida ? 'Sim' : 'Não'}</strong>
              </li>
            </ul>
          </div>

          {ingredients.length ? (
            <div className="dialog-section">
              <h5>Ingredientes</h5>
              <ul className="ingredient-list">
                {ingredients.map((item, index) => (
                  <li key={`${item.nome}-${index}`}>
                    <Utensils size={14} /> {item.nome}{' '}
                    {item.quantidade ? (
                      <small>
                        — {item.quantidade}
                        {item.unidade ? ` ${item.unidade}` : ''}
                      </small>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {meal.modo_preparo ? (
            <div className="dialog-section">
              <h5>Modo de preparo</h5>
              <p>{meal.modo_preparo}</p>
            </div>
          ) : null}

          {meal.dica_nutricional ? (
            <div className="dialog-tip">
              <h5>💡 Dica nutricional</h5>
              <p>{meal.dica_nutricional}</p>
            </div>
          ) : null}

          <div className="dialog-actions">
            <Button onClick={() => onToggle(meal)} variant="primary">
              {meal.consumida ? 'Desmarcar consumo' : 'Marcar como consumida'}
            </Button>
            <div className="secondary-actions">
              <Button variant="ghost" onClick={() => onEdit(meal)}>
                <Edit3 size={16} />
                Editar
              </Button>
              <Button variant="danger" onClick={() => onDelete(meal)}>
                <Trash2 size={16} />
                Excluir
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MealDetailsDialog;

