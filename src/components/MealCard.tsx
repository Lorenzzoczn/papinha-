import { motion } from 'framer-motion';
import { CheckCircle, Clock3 } from 'lucide-react';

import type { Meal } from '@/types';
import { formatTime } from '@/utils/date';

type MealCardProps = {
  meal: Meal;
  onSelect: (meal: Meal) => void;
  onToggle: (meal: Meal) => void;
};

export const MealCard = ({ meal, onSelect, onToggle }: MealCardProps) => {
  const consumed = meal.consumida;
  const timeLabel = formatTime(meal.horario);

  return (
    <motion.article
      className={consumed ? 'meal-card consumed glass-card' : 'meal-card glass-card'}
      layout
      transition={{ type: 'spring', stiffness: 240, damping: 24 }}
    >
      <button className="meal-time" onClick={() => onSelect(meal)}>
        <Clock3 size={18} />
        <span>{timeLabel}</span>
      </button>

      <div className="meal-info" onClick={() => onSelect(meal)}>
        <h4>{meal.nome_papinha}</h4>
        {meal.porcoes ? <span>{meal.porcoes}</span> : null}
      </div>

      <button className="meal-check" onClick={() => onToggle(meal)} aria-label="Marcar consumo">
        <CheckCircle size={26} className={consumed ? 'checked' : ''} />
      </button>
    </motion.article>
  );
};

export default MealCard;

