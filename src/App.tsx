import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from '@/components/AppLayout';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { QueryProvider } from '@/providers/QueryProvider';
import { AuthProvider, useAuth } from '@/providers/AuthProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';
import AuthPage from '@/pages/Auth';
import CalendarPage from '@/pages/Calendar';
import GuidesPage from '@/pages/Guides';
import RecipesPage from '@/pages/Recipes';
import TodayPage from '@/pages/Today';

const PrivateRoutes = () => {
  const { session, isGuest, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <p>Carregando papinhas...</p>
      </div>
    );
  }

  if (!session && !isGuest) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/today" replace />} />
        <Route path="/today" element={<TodayPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/guides" element={<GuidesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/today" replace />} />
    </Routes>
  );
};

const App = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/*" element={<PrivateRoutes />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;

