# 🚀 Deploy - Papinha Planner Web

Guia completo para fazer deploy da aplicação em produção.

---

## 📋 Pré-requisitos

- ✅ Projeto funcionando localmente
- ✅ Conta no Supabase configurada
- ✅ Build testado (`npm run build`)
- ✅ Conta em uma plataforma de hosting

---

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado) ⭐

**Vantagens:**
- Deploy automático via Git
- HTTPS gratuito
- CDN global
- Configuração zero
- Preview deployments

#### Passo a Passo

1. **Criar conta:**
   - Acesse https://vercel.com
   - Faça login com GitHub

2. **Importar projeto:**
   - Clique em "New Project"
   - Selecione o repositório
   - Configure o root directory: `papinha/LovablePapinhaWeb`

3. **Configurar variáveis de ambiente:**
   ```
   VITE_SUPABASE_URL=https://seu-projeto.supabase.co
   VITE_SUPABASE_ANON_KEY=sua-chave-anon
   ```

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o build
   - Acesse a URL gerada

#### Via CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd papinha/LovablePapinhaWeb
vercel

# Deploy para produção
vercel --prod
```

---

### 2. Netlify

**Vantagens:**
- Interface simples
- Forms e Functions integrados
- Deploy previews
- HTTPS automático

#### Passo a Passo

1. **Criar conta:**
   - Acesse https://netlify.com
   - Faça login com GitHub

2. **Novo site:**
   - "Add new site" → "Import an existing project"
   - Conecte ao GitHub
   - Selecione o repositório

3. **Configurações de build:**
   ```
   Base directory: papinha/LovablePapinhaWeb
   Build command: npm run build
   Publish directory: dist
   ```

4. **Variáveis de ambiente:**
   - Site settings → Environment variables
   - Adicione:
     ```
     VITE_SUPABASE_URL
     VITE_SUPABASE_ANON_KEY
     ```

5. **Deploy:**
   - Clique em "Deploy site"
   - Aguarde o build

#### Via CLI
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
cd papinha/LovablePapinhaWeb
netlify deploy

# Deploy para produção
netlify deploy --prod
```

---

### 3. GitHub Pages

**Vantagens:**
- Gratuito
- Integrado ao GitHub
- Simples para projetos estáticos

#### Passo a Passo

1. **Configurar vite.config.ts:**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-repositorio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

2. **Adicionar script no package.json:**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Instalar gh-pages:**
```bash
npm install --save-dev gh-pages
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Configurar no GitHub:**
   - Settings → Pages
   - Source: gh-pages branch
   - Salvar

**⚠️ Limitação:** Não suporta variáveis de ambiente server-side. Use apenas para demos.

---

### 4. Railway

**Vantagens:**
- Deploy de full-stack
- Database integrado
- Logs em tempo real
- Fácil configuração

#### Passo a Passo

1. **Criar conta:**
   - Acesse https://railway.app
   - Login com GitHub

2. **Novo projeto:**
   - "New Project" → "Deploy from GitHub repo"
   - Selecione o repositório

3. **Configurar:**
   - Root directory: `papinha/LovablePapinhaWeb`
   - Build command: `npm run build`
   - Start command: `npm run preview`

4. **Variáveis de ambiente:**
   - Adicione as variáveis do Supabase

5. **Deploy:**
   - Railway faz deploy automático

---

### 5. Render

**Vantagens:**
- Free tier generoso
- Auto-deploy
- HTTPS gratuito
- Fácil de usar

#### Passo a Passo

1. **Criar conta:**
   - Acesse https://render.com
   - Login com GitHub

2. **Novo Static Site:**
   - "New" → "Static Site"
   - Conecte ao repositório

3. **Configurações:**
   ```
   Root Directory: papinha/LovablePapinhaWeb
   Build Command: npm run build
   Publish Directory: dist
   ```

4. **Variáveis de ambiente:**
   - Environment → Add Environment Variable
   - Adicione as variáveis do Supabase

5. **Deploy:**
   - Clique em "Create Static Site"

---

## 🔧 Configuração do Supabase para Produção

### 1. URLs Permitidas

No Supabase Dashboard:
- **Authentication** → **URL Configuration**
- Adicione suas URLs de produção:
  ```
  https://seu-app.vercel.app
  https://seu-app.netlify.app
  ```

### 2. CORS

No Supabase Dashboard:
- **Settings** → **API**
- Adicione os domínios permitidos

### 3. Rate Limiting

- Configure limites apropriados
- Monitore uso na aba "Usage"

---

## ✅ Checklist Pré-Deploy

- [ ] Testes locais passando
- [ ] Build sem erros (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] URLs do Supabase atualizadas
- [ ] CORS configurado
- [ ] .env.local não commitado
- [ ] README atualizado
- [ ] Versão taggeada no Git

---

## 🔍 Verificação Pós-Deploy

### 1. Funcionalidades
- [ ] Login funciona
- [ ] Cadastro funciona
- [ ] CRUD de refeições funciona
- [ ] Calendário carrega
- [ ] Receitas aparecem
- [ ] Tema claro/escuro funciona

### 2. Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Sem erros no console

### 3. Segurança
- [ ] HTTPS ativo
- [ ] Headers de segurança configurados
- [ ] RLS funcionando
- [ ] Tokens não expostos

---

## 📊 Monitoramento

### Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// src/main.tsx
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);
```

### Sentry (Error Tracking)
```bash
npm install @sentry/react
```

```typescript
// src/main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

---

## 🔄 CI/CD

### GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        working-directory: papinha/LovablePapinhaWeb
        run: npm ci
        
      - name: Build
        working-directory: papinha/LovablePapinhaWeb
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: papinha/LovablePapinhaWeb
```

---

## 🐛 Troubleshooting

### Build falha
```bash
# Limpar cache
rm -rf node_modules dist
npm install
npm run build
```

### Variáveis de ambiente não funcionam
- Verifique se começam com `VITE_`
- Reinicie o build após adicionar
- Verifique se não há espaços extras

### CORS errors
- Adicione a URL no Supabase
- Verifique se a URL está correta
- Limpe cache do browser

### 404 em rotas
- Configure redirects/rewrites
- Vercel: crie `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- Netlify: crie `_redirects`:
```
/*    /index.html   200
```

---

## 💰 Custos Estimados

### Free Tier (Desenvolvimento)
- **Vercel:** Grátis (100GB bandwidth)
- **Netlify:** Grátis (100GB bandwidth)
- **Supabase:** Grátis (500MB database, 2GB bandwidth)
- **Total:** R$ 0/mês

### Produção (Pequeno)
- **Vercel Pro:** $20/mês
- **Supabase Pro:** $25/mês
- **Total:** ~R$ 225/mês

### Produção (Médio)
- **Vercel Team:** $20/usuário/mês
- **Supabase Pro:** $25/mês
- **Sentry:** $26/mês
- **Total:** ~R$ 355/mês

---

## 📚 Recursos Adicionais

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Supabase Production Checklist](https://supabase.com/docs/guides/platform/going-into-prod)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 🎉 Pronto!

Seu Papinha Planner está no ar! 🚀

**Próximos passos:**
1. Compartilhe com usuários
2. Monitore performance
3. Colete feedback
4. Itere e melhore

---

**Boa sorte com seu deploy! 💚**
