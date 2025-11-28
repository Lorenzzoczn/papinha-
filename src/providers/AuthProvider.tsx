import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import type { Session, User } from '@supabase/supabase-js';

import { supabase, isSupabaseConfigured } from '@/services/supabaseClient';

type Credentials = { email: string; password: string };

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  isGuest: boolean;
  signIn: (credentials: Credentials) => Promise<void>;
  signUp: (credentials: Credentials) => Promise<void>;
  signOut: () => Promise<void>;
  continueAsGuest: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const GUEST_MODE_KEY = 'papinha-guest-mode';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // Verificar se está em modo visitante
    const guestMode = localStorage.getItem(GUEST_MODE_KEY);
    if (guestMode === 'true') {
      setIsGuest(true);
      setIsLoading(false);
      return;
    }

    // Se Supabase não está configurado, forçar modo visitante
    if (!isSupabaseConfigured) {
      setIsGuest(true);
      setIsLoading(false);
      localStorage.setItem(GUEST_MODE_KEY, 'true');
      return;
    }

    // Verificar sessão do Supabase
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
      setIsLoading(false);
    }).catch((error) => {
      console.error('Erro ao verificar sessão:', error);
      setIsLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) {
        setIsGuest(false);
        localStorage.removeItem(GUEST_MODE_KEY);
      }
    });

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  const signIn = async ({ email, password }: Credentials) => {
    if (!isSupabaseConfigured) {
      throw new Error('Autenticação não disponível. Use o modo visitante.');
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setIsGuest(false);
    localStorage.removeItem(GUEST_MODE_KEY);
  };

  const signUp = async ({ email, password }: Credentials) => {
    if (!isSupabaseConfigured) {
      throw new Error('Cadastro não disponível. Use o modo visitante.');
    }
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const signOut = async () => {
    if (isGuest) {
      setIsGuest(false);
      localStorage.removeItem(GUEST_MODE_KEY);
    } else {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
  };

  const continueAsGuest = () => {
    localStorage.setItem(GUEST_MODE_KEY, 'true');
    setIsGuest(true);
    setIsLoading(false);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      isLoading,
      isGuest,
      signIn,
      signUp,
      signOut,
      continueAsGuest,
    }),
    [isLoading, session, isGuest],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
};

