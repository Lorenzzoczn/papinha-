# 🔧 Como Configurar o .env.local

## Método 1: Criar manualmente (Recomendado)

### Passo 1: Criar o arquivo
Na pasta `papinha/LovablePapinhaWeb`, crie um arquivo chamado **`.env.local`** (com o ponto no início).

### Passo 2: Obter credenciais do Supabase

1. Acesse https://app.supabase.com
2. Faça login e selecione seu projeto (ou crie um novo)
3. Vá em **Settings** (⚙️) no menu lateral
4. Clique em **API**
5. Você verá:
   - **Project URL** → copie este valor
   - **anon public** key → copie este valor (NÃO use a service_role key!)

### Passo 3: Colar no arquivo `.env.local`

Abra o arquivo `.env.local` e cole o seguinte conteúdo, substituindo pelos seus valores:

```env
VITE_SUPABASE_URL=https://seu-projeto-id.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

**Exemplo real:**
```env
VITE_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.exemplo...
```

---

## Método 2: Via Terminal (PowerShell)

No PowerShell, dentro da pasta `papinha/LovablePapinhaWeb`, execute:

```powershell
@"
VITE_SUPABASE_URL=https://seu-projeto-id.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
"@ | Out-File -FilePath .env.local -Encoding utf8
```

Depois, edite o arquivo e substitua pelos valores reais.

---

## Método 3: Copiar do exemplo

Se você já tem o arquivo `.env.example`, pode copiá-lo:

```powershell
# No PowerShell
Copy-Item .env.example .env.local
```

Depois, edite o `.env.local` e preencha os valores.

---

## ✅ Verificar se funcionou

1. Salve o arquivo `.env.local`
2. Reinicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Se tudo estiver correto, você verá a tela de login do app

---

## ⚠️ Importante

- ✅ O arquivo `.env.local` **NÃO** será commitado no Git (já está no `.gitignore`)
- ✅ Use sempre a chave **anon/public**, nunca a **service_role** no frontend
- ✅ Não compartilhe suas credenciais publicamente
- ❌ Não adicione o `.env.local` ao Git

---

## 🆘 Problemas comuns

### "Supabase credentials are missing"
- Verifique se o arquivo está na raiz do projeto `LovablePapinhaWeb`
- Verifique se o nome do arquivo é exatamente `.env.local` (com o ponto)
- Reinicie o servidor após criar/editar o arquivo

### "Invalid API key"
- Verifique se copiou a chave **anon/public** e não a service_role
- Verifique se não há espaços extras ou quebras de linha no arquivo

---

Pronto! Com o `.env.local` configurado, o app estará pronto para usar o Supabase. 🚀

