# 🔧 Configuração do Ambiente (.env.local)

## Passo a Passo

### 1. Criar o arquivo `.env.local`

Na raiz do projeto `LovablePapinhaWeb`, crie um arquivo chamado `.env.local` (sem extensão).

### 2. Obter as credenciais do Supabase

1. Acesse o [Supabase Dashboard](https://app.supabase.com)
2. Selecione seu projeto (ou crie um novo)
3. Vá em **Settings** (⚙️) > **API**
4. Copie as seguintes informações:
   - **Project URL** → será o valor de `VITE_SUPABASE_URL`
   - **anon/public key** → será o valor de `VITE_SUPABASE_ANON_KEY`

### 3. Preencher o arquivo `.env.local`

Cole o seguinte conteúdo no arquivo `.env.local` e preencha com suas credenciais:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://seu-projeto-id.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

**Exemplo real:**
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.exemplo...
```

### 4. Verificar se está funcionando

Após configurar, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

Se tudo estiver correto, você verá a tela de autenticação do app.

## ⚠️ Importante

- O arquivo `.env.local` **NÃO** deve ser commitado no Git (já está no `.gitignore`)
- Use sempre a chave **anon/public**, nunca a chave **service_role** no frontend
- Se você ainda não tem um projeto Supabase, siga as instruções no `README.md` para criar o banco de dados

## 📝 Nota

O arquivo `.env.example` serve como template. Você pode copiá-lo para `.env.local` e preencher:

```bash
# No Windows (PowerShell)
Copy-Item .env.example .env.local

# No Linux/Mac
cp .env.example .env.local
```

