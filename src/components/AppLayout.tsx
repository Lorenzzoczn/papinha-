import { Baby, BookOpen, CalendarDays, Menu, Soup, LogOut } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

import { Button } from './Button';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '@/providers/AuthProvider';

const NAVIGATION = [
  { to: '/today', label: 'Hoje', icon: Baby },
  { to: '/calendar', label: 'Calendário', icon: CalendarDays },
  { to: '/recipes', label: 'Receitas', icon: Soup },
  { to: '/guides', label: 'Guias', icon: BookOpen },
];

export const AppLayout = () => {
  const { signOut, isGuest } = useAuth();

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <Menu size={18} />
          <div>
            <strong>Papinha</strong>
            <span>Planner</span>
          </div>
          {isGuest && <span className="guest-badge">👋 Visitante</span>}
        </div>

        <nav className="nav-bar">
          {NAVIGATION.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Button variant="ghost" onClick={() => signOut().catch(() => {})}>
            <LogOut size={16} />
            {isGuest ? 'Sair do modo visitante' : 'Sair'}
          </Button>
        </div>
      </header>

      <main className="app-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

