import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/providers/ThemeProvider';

export const ThemeToggle = () => {
  const { mode, toggle } = useTheme();
  const isDark = mode === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="theme-toggle"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span>{isDark ? 'Modo escuro' : 'Modo claro'}</span>
    </button>
  );
};

export default ThemeToggle;

