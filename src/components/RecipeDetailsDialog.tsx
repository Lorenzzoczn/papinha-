import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from 'lucide-react';

import { Button } from './Button';
import { normalizeIngredients } from '@/services/mealService';
import type { Recipe } from '@/types';

type RecipeDetailsDialogProps = {
  recipe: Recipe | null;
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onCreate: (recipe: Recipe) => void;
};

export const RecipeDetailsDialog = ({ recipe, open, onOpenChange, onCreate }: RecipeDetailsDialogProps) => {
  if (!recipe) return null;
  const ingredients = normalizeIngredients(recipe.ingredientes);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title>{recipe.nome_papinha}</Dialog.Title>
          <Dialog.Description>
            {recipe.tempo_preparo ? `Tempo de preparo aproximado: ${recipe.tempo_preparo} minutos.` : 'Receita nutritiva'}
          </Dialog.Description>

          {ingredients.length ? (
            <div className="dialog-section">
              <h5>Ingredientes</h5>
              <ul className="ingredient-list">
                {ingredients.map((item, index) => (
                  <li key={`${item.nome}-${index}`}>
                    🍴 {item.nome}{' '}
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

          {recipe.modo_preparo ? (
            <div className="dialog-section">
              <h5>Modo de preparo</h5>
              <p>{recipe.modo_preparo}</p>
            </div>
          ) : null}

          {recipe.dica_nutricional ? (
            <div className="dialog-tip">
              <h5>💡 Dica nutricional</h5>
              <p>{recipe.dica_nutricional}</p>
            </div>
          ) : null}

          <Button onClick={() => onCreate(recipe)}>
            <Plus size={16} />
            Adicionar ao plano
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RecipeDetailsDialog;

