# 🚀 Guia Rápido - Papinha Planner Web

## ✅ Checklist de Configuração

### 1. Instalar Dependências
```bash
cd papinha/LovablePapinhaWeb
npm install
```

### 2. Configurar Supabase

#### Opção A: Criar projeto no Supabase (Recomendado)
1. Acesse https://app.supabase.com
2. Crie um novo projeto
3. Vá em **Settings** → **API**
4. Copie:
   - **Project URL**
   - **anon/public key**

#### Opção B: Usar modo local (desenvolvimento)
Edite o arquivo `.env.local` e adicione:
```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon
```

### 3. Criar Schema do Banco de Dados

Execute no SQL Editor do Supabase:

```sql
-- Criar tabela de refeições
CREATE TABLE IF NOT EXISTS refeicoes (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  dia DATE NOT NULL,
  horario TIME NOT NULL,
  nome_papinha TEXT NOT NULL,
  tempo_preparo INTEGER,
  porcoes TEXT,
  ingredientes JSONB,
  modo_preparo TEXT,
  dica_nutricional TEXT,
  consumida BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Criar índices para performance
CREATE INDEX IF NOT EXISTS idx_refeicoes_user_dia ON refeicoes(user_id, dia);
CREATE INDEX IF NOT EXISTS idx_refeicoes_dia ON refeicoes(dia);

-- Habilitar RLS (Row Level Security)
ALTER TABLE refeicoes ENABLE ROW LEVEL SECURITY;

-- Políticas de segurança
CREATE POLICY "Usuários podem ver suas próprias refeições"
  ON refeicoes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem criar suas próprias refeições"
  ON refeicoes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem atualizar suas próprias refeições"
  ON refeicoes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Usuários podem deletar suas próprias refeições"
  ON refeicoes FOR DELETE
  USING (auth.uid() = user_id);

-- Função para listar receitas únicas
CREATE OR REPLACE FUNCTION list_unique_recipes()
RETURNS TABLE (
  nome_papinha TEXT,
  tempo_preparo INTEGER,
  porcoes TEXT,
  ingredientes JSONB,
  modo_preparo TEXT,
  dica_nutricional TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT DISTINCT ON (r.nome_papinha)
    r.nome_papinha,
    r.tempo_preparo,
    r.porcoes,
    r.ingredientes,
    r.modo_preparo,
    r.dica_nutricional
  FROM refeicoes r
  WHERE r.user_id = auth.uid()
  ORDER BY r.nome_papinha, r.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

### 4. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```

O app estará disponível em: http://localhost:5173

---

## 📱 Funcionalidades

### ✅ Hoje
- Visualize todas as refeições do dia atual
- Marque papinhas como consumidas
- Adicione novas refeições rapidamente
- Edite ou delete refeições existentes

### 📅 Calendário
- Navegue por meses
- Veja indicadores de consumo por dia
- Clique em um dia para ver detalhes
- Planeje refeições futuras

### 🍲 Receitas
- Catálogo de todas as suas receitas
- Busca por nome
- Visualize detalhes completos
- Crie refeições a partir de receitas salvas

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Verificar tipos TypeScript
npx tsc --noEmit
```

---

## 🐛 Solução de Problemas

### "Supabase credentials are missing"
- Verifique se o arquivo `.env.local` existe
- Confirme que as variáveis estão corretas
- Reinicie o servidor de desenvolvimento

### Erro de autenticação
- Verifique se o projeto Supabase está ativo
- Confirme que a chave é a **anon/public** (não service_role)
- Limpe o localStorage: `localStorage.clear()` no console

### Receitas não aparecem
- Certifique-se de ter criado pelo menos uma refeição
- Verifique se a função `list_unique_recipes()` foi criada no banco
- Verifique as políticas RLS no Supabase

---

## 🎨 Personalização

### Tema
- Toggle claro/escuro no cabeçalho
- Sincroniza com preferências do sistema
- Persistido no localStorage

### Cores e Estilos
Edite `src/styles/global.css` para customizar:
- Cores primárias e secundárias
- Tipografia (Inter + Poppins)
- Sombras e bordas
- Animações

---

## 📦 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Faça upload da pasta dist/
```

Configure as variáveis de ambiente no painel da Vercel:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

Configure as variáveis de ambiente no painel da Netlify.

---

## 🔐 Segurança

✅ **Implementado:**
- Row Level Security (RLS) no Supabase
- Autenticação JWT
- Políticas de acesso por usuário
- Validação de sessão

⚠️ **Importante:**
- Nunca exponha a `service_role` key no frontend
- Use sempre a chave `anon/public`
- Mantenha o `.env.local` fora do Git

---

## 📚 Recursos

- [Documentação Supabase](https://supabase.com/docs)
- [React Query](https://tanstack.com/query/latest)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Pronto para começar! 🎉**

Se tiver dúvidas, consulte o `README.md` ou `COMO_CONFIGURAR_ENV.md`.
