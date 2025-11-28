# 🚀 START - Papinha Planner Web

## Início Rápido (5 minutos)

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Configurar Supabase

**Opção A - Criar Projeto no Supabase:**
1. Acesse: https://app.supabase.com
2. Clique em "New Project"
3. Preencha os dados e aguarde a criação
4. Vá em **Settings** → **API**
5. Copie:
   - **Project URL** (ex: https://abc123.supabase.co)
   - **anon public** key (começa com eyJ...)

**Opção B - Usar Supabase Local (Avançado):**
```bash
npx supabase init
npx supabase start
```

### 3️⃣ Criar arquivo .env.local

Edite o arquivo `.env.local` na raiz do projeto:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

### 4️⃣ Criar Banco de Dados

No Supabase, vá em **SQL Editor** e execute o arquivo `setup.sql`:

```sql
-- Copie e cole todo o conteúdo do arquivo setup.sql
-- Ou use o comando abaixo se tiver o CLI instalado:
-- supabase db push -f setup.sql
```

### 5️⃣ Iniciar o App
```bash
npm run dev
```

Acesse: http://localhost:5173

---

## ✅ Checklist de Verificação

- [ ] Node.js instalado (v18+)
- [ ] Dependências instaladas (`npm install`)
- [ ] Projeto Supabase criado
- [ ] Arquivo `.env.local` configurado
- [ ] Script `setup.sql` executado no Supabase
- [ ] Servidor rodando (`npm run dev`)

---

## 🎯 Próximos Passos

1. **Criar Conta**: Clique em "Criar conta" no app
2. **Fazer Login**: Use o email e senha cadastrados
3. **Adicionar Papinha**: Clique em "Nova Refeição"
4. **Explorar**: Navegue pelas abas Hoje, Calendário e Receitas

---

## 🐛 Problemas Comuns

### "Supabase credentials are missing"
✅ Verifique se o `.env.local` existe e está preenchido
✅ Reinicie o servidor (`Ctrl+C` e `npm run dev`)

### "Failed to fetch"
✅ Verifique se o projeto Supabase está ativo
✅ Confirme que a URL e chave estão corretas
✅ Verifique sua conexão com a internet

### "No rows returned"
✅ Execute o script `setup.sql` no Supabase
✅ Verifique se as políticas RLS foram criadas
✅ Crie uma conta e faça login

### Erro de CORS
✅ No Supabase, vá em **Authentication** → **URL Configuration**
✅ Adicione `http://localhost:5173` nas URLs permitidas

---

## 📚 Documentação Completa

- **GUIA_RAPIDO.md** - Guia detalhado de configuração
- **README.md** - Visão geral do projeto
- **COMO_CONFIGURAR_ENV.md** - Detalhes sobre variáveis de ambiente
- **setup.sql** - Script completo do banco de dados

---

## 🆘 Precisa de Ajuda?

1. Verifique os arquivos de documentação acima
2. Consulte a [Documentação do Supabase](https://supabase.com/docs)
3. Verifique o console do navegador (F12) para erros

---

**Boa sorte! 🍲💚**
