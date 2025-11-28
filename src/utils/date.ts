import { addDays, eachDayOfInterval, endOfMonth, format, isSameDay, parseISO, startOfMonth } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDayLabel = (isoDate: string) => {
  const parsed = parseISO(isoDate);
  const weekday = format(parsed, 'EEEE', { locale: ptBR });
  const day = format(parsed, "d 'de' MMMM", { locale: ptBR });
  return {
    weekday: weekday[0].toUpperCase() + weekday.slice(1),
    dateLabel: day,
  };
};

export const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  return `${hours}:${minutes}`;
};

export const getMonthInterval = (reference: Date) => {
  const start = startOfMonth(reference);
  const end = endOfMonth(reference);
  return { start, end };
};

export const buildMonthMatrix = (reference: Date) => {
  const { start, end } = getMonthInterval(reference);
  const firstDayOfGrid = addDays(start, -((start.getDay() + 6) % 7));
  const days = eachDayOfInterval({ start: firstDayOfGrid, end: addDays(end, 6 - ((end.getDay() + 6) % 7)) });
  const weeks: Date[][] = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return weeks;
};

export const isSameISODate = (dateA: string, dateB: string) => isSameDay(parseISO(dateA), parseISO(dateB));

