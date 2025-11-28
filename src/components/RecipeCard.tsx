import { Clock3, Users } from 'lucide-react';

import type { Recipe } from '@/types';

type RecipeCardProps = {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
};

export const RecipeCard = ({ recipe, onSelect }: RecipeCardProps) => (
  <button className="recipe-card glass-card" onClick={() => onSelect(recipe)}>
    <div className="icon">
      <span role="img" aria-hidden>
        🍲
      </span>
    </div>
    <div className="content">
      <h4>{recipe.nome_papinha}</h4>
      <div className="meta">
        {recipe.tempo_preparo ? (
          <span>
            <Clock3 size={14} /> {recipe.tempo_preparo} min
          </span>
        ) : null}
        {recipe.porcoes ? (
          <span>
            <Users size={14} /> {recipe.porcoes}
          </span>
        ) : null}
      </div>
    </div>
    <div className="chevron">→</div>
  </button>
);

export default RecipeCard;

