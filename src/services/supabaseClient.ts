import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificar se as credenciais estão configuradas
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseKey && 
  supabaseUrl.trim() !== '' && 
  supabaseKey.trim() !== '' &&
  !supabaseUrl.includes('seu-projeto') && 
  !supabaseKey.includes('sua-chave') &&
  !supabaseUrl.includes('placeholder')
);

// Validação de credenciais
if (!isSupabaseConfigured) {
  console.warn('⚠️ Supabase não configurado - usando modo visitante apenas');
  console.info('📋 Para habilitar login e sincronização:');
  console.info('1. Acesse: https://app.supabase.com');
  console.info('2. Crie um projeto (grátis)');
  console.info('3. Vá em Settings → API');
  console.info('4. Configure as variáveis no .env.local');
  console.info('5. Faça rebuild: npm run build');
}

// Criar cliente com valores seguros
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

