# ⚡ CONFIGURAR AGORA - Papinha Planner

## 🚨 Erro "Failed to fetch"?

Este erro significa que o Supabase não está configurado. Siga os passos abaixo:

---

## 📋 Passo a Passo (5 minutos)

### 1️⃣ Criar Projeto no Supabase

1. Acesse: **https://app.supabase.com**
2. Clique em **"New Project"**
3. Preencha:
   - **Name:** Papinha Planner (ou qualquer nome)
   - **Database Password:** Crie uma senha forte
   - **Region:** Escolha o mais próximo (ex: South America)
4. Clique em **"Create new project"**
5. Aguarde 2-3 minutos (o projeto está sendo criado)

### 2️⃣ Copiar Credenciais

1. No projeto criado, vá em **Settings** (⚙️ no menu lateral)
2. Clique em **API**
3. Você verá duas informações importantes:

   **Project URL:**
   ```
   https://abcdefghijk.supabase.co
   ```
   
   **anon public (chave pública):**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MTYyMzkwMjIsImV4cCI6MTkzMTgxNTAyMn0.exemplo...
   ```

4. **COPIE ESSES DOIS VALORES!**

### 3️⃣ Configurar o .env.local

1. Abra o arquivo `.env.local` na pasta `papinha/LovablePapinhaWeb`
2. Cole os valores copiados:

```env
VITE_SUPABASE_URL=https://abcdefghijk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **Salve o arquivo** (Ctrl+S)

### 4️⃣ Criar Banco de Dados

1. No Supabase, vá em **SQL Editor** (no menu lateral)
2. Clique em **"New query"**
3. Abra o arquivo `setup.sql` (na pasta do projeto)
4. **Copie TODO o conteúdo** do arquivo
5. **Cole no SQL Editor** do Supabase
6. Clique em **"Run"** (ou pressione Ctrl+Enter)
7. Aguarde a mensagem de sucesso ✅

### 5️⃣ Reiniciar o Servidor

1. No terminal, pressione **Ctrl+C** para parar o servidor
2. Execute novamente:
   ```bash
   npm run dev
   ```
3. Acesse: **http://localhost:5173**

### 6️⃣ Testar

1. Clique em **"Criar conta"**
2. Preencha email e senha
3. Clique em **"Criar conta"**
4. Faça login com as credenciais criadas
5. **Pronto!** 🎉

---

## ✅ Checklist

- [ ] Projeto criado no Supabase
- [ ] URL e chave copiadas
- [ ] Arquivo .env.local configurado
- [ ] Script setup.sql executado no Supabase
- [ ] Servidor reiniciado
- [ ] Conta criada e login funcionando

---

## 🐛 Ainda com Problemas?

### Erro persiste após configurar
```bash
# Limpe o cache e reinstale
rm -rf node_modules dist
npm install
npm run dev
```

### "Invalid API key"
- Verifique se copiou a chave **anon/public** (não a service_role)
- Verifique se não há espaços extras no .env.local

### "No rows returned"
- Execute o script setup.sql no Supabase
- Verifique se as tabelas foram criadas (vá em Table Editor)

### Outros erros
Execute o diagnóstico:
```bash
npm run check
```

---

## 📞 Precisa de Ajuda?

1. Consulte: **START.md** - Guia completo
2. Consulte: **GUIA_RAPIDO.md** - Tutorial detalhado
3. Verifique o console do navegador (F12) para erros

---

## 💡 Dica

Após configurar, você pode adicionar receitas de exemplo:
1. No Supabase SQL Editor
2. Execute o arquivo `seed-examples.sql`
3. Substitua `SEU_USER_ID` pelo seu UUID (execute `SELECT auth.uid();`)

---

**Boa sorte! 🚀**
