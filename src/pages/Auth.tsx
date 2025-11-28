import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';
import { useAuth } from '@/providers/AuthProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { isSupabaseConfigured } from '@/services/supabaseClient';

export const AuthPage = () => {
  const navigate = useNavigate();
  const { signIn, signUp, continueAsGuest, isGuest } = useAuth();
  const { mode, toggle } = useTheme();
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Se Supabase não está configurado, redirecionar automaticamente para modo visitante
  useEffect(() => {
    if (!isSupabaseConfigured && !isGuest) {
      continueAsGuest();
      navigate('/today');
    }
  }, [isSupabaseConfigured, isGuest, continueAsGuest, navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (authMode === 'signin') {
        await signIn({ email, password });
      } else {
        await signUp({ email, password });
        alert('Cadastro realizado! Verifique seu e-mail para confirmar a conta.');
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      
      // Mensagens de erro mais amigáveis
      if (errorMessage.includes('Failed to fetch') || errorMessage.includes('fetch')) {
        alert(
          '❌ Erro de conexão!\n\n' +
          'Verifique:\n' +
          '1. Se o Supabase está configurado no .env.local\n' +
          '2. Se a URL e chave estão corretas\n' +
          '3. Se sua internet está funcionando\n\n' +
          'Consulte: START.md para instruções'
        );
      } else if (errorMessage.includes('Invalid login credentials')) {
        alert('❌ Email ou senha incorretos. Tente novamente.');
      } else if (errorMessage.includes('User already registered')) {
        alert('❌ Este email já está cadastrado. Faça login.');
      } else {
        alert('❌ Erro: ' + errorMessage);
      }
      
      console.error('Erro de autenticação:', error);
    } finally {
      setLoading(false);
    }
  };

  const isDark = mode === 'dark';

  // Se Supabase não está configurado, mostrar apenas opção de visitante
  if (!isSupabaseConfigured) {
    return (
      <div className="auth-screen">
        <div className="auth-card glass-card">
          <div className="auth-header">
            <div>
              <span className="tag">Papinha Planner</span>
              <h1>Bem-vindo! 👋</h1>
              <p>
                O planejador inteligente de papinhas está pronto para uso.
                Seus dados serão salvos localmente no navegador.
              </p>
            </div>
            <button className="theme-toggle" onClick={toggle}>
              {isDark ? 'Modo escuro' : 'Modo claro'}
            </button>
          </div>

          <Button onClick={() => { continueAsGuest(); navigate('/today'); }}>
            🍼 Começar a usar
          </Button>

          <p className="guest-info">
            💡 Seus dados ficam salvos apenas neste navegador
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-screen">
      <div className="auth-card glass-card">
        <div className="auth-header">
          <div>
            <span className="tag">Papinha Planner</span>
            <h1>Planeje papinhas com carinho</h1>
            <p>
              Cadastre-se ou faça login para acessar o planejador inteligente de papinhas,
              com calendário, catálogo de receitas e controle diário.
            </p>
          </div>
          <button className="theme-toggle" onClick={toggle}>
            {isDark ? 'Modo escuro' : 'Modo claro'}
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            E-mail
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              required
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="mínimo 6 caracteres"
              required
            />
          </label>
          <Button type="submit" loading={loading}>
            {authMode === 'signin' ? 'Entrar' : 'Criar conta'}
          </Button>
        </form>

        <div className="auth-footer">
          <span>{authMode === 'signin' ? 'Ainda não tem conta?' : 'Já possui conta?'}</span>
          <button
            type="button"
            onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
            className="link"
          >
            {authMode === 'signin' ? 'Criar agora' : 'Entrar'}
          </button>
        </div>

        <div className="auth-divider">
          <span>ou</span>
        </div>

        <Button variant="ghost" onClick={() => { continueAsGuest(); navigate('/today'); }}>
          👋 Continuar como visitante
        </Button>

        <p className="guest-info">
          💡 Modo visitante: Seus dados ficam salvos apenas neste navegador
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

