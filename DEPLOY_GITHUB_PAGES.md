# 🚀 Deploy Rápido no GitHub Pages

Guia simplificado para colocar o Papinha Planner no ar em minutos!

---

## 📦 Método 1: Deploy Automático (Recomendado)

### Configuração Inicial (Uma vez só)

1. **No GitHub, vá em Settings → Pages:**
   - Source: GitHub Actions
   - Salve

2. **Adicione as variáveis de ambiente (Secrets):**
   - Settings → Secrets and variables → Actions
   - Clique em "New repository secret"
   - Adicione:
     - `VITE_SUPABASE_URL` = sua URL do Supabase
     - `VITE_SUPABASE_ANON_KEY` = sua chave anon do Supabase

### Deploy

Agora é só fazer push:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

✅ O GitHub Actions vai buildar e fazer deploy automaticamente!

Acesse em: `https://seu-usuario.github.io/LovablePapinhaWeb/`

---

## 🔧 Método 2: Deploy Manual

### Passo a Passo

1. **Build do projeto:**
```bash
cd papinha/LovablePapinhaWeb
npm run build:gh
```

2. **Deploy:**
```bash
npm run deploy:gh
```

3. **Configure no GitHub:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Salve

✅ Pronto! Acesse em: `https://seu-usuario.github.io/LovablePapinhaWeb/`

---

## ⚡ Comandos Rápidos

```bash
# Build para GitHub Pages
npm run build:gh

# Build + Deploy em um comando
npm run deploy:gh

# Preview local do build
npm run preview
```

---

## 🔍 Verificar Status do Deploy

1. Vá em **Actions** no GitHub
2. Veja o workflow "Deploy to GitHub Pages"
3. Aguarde o ✅ verde
4. Acesse a URL do seu site

---

## 🐛 Problemas Comuns

### Build falha no GitHub Actions

**Solução:** Verifique se as secrets estão configuradas:
- Settings → Secrets and variables → Actions
- Devem existir: `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`

### 404 ao acessar rotas

**Solução:** Adicione um arquivo `404.html` que redireciona para `index.html`:

```bash
# Já está configurado no build!
```

### Página em branco

**Solução:** Verifique o console do navegador:
- F12 → Console
- Veja se há erros de CORS ou variáveis de ambiente

### Deploy manual não funciona

**Solução:** Instale o gh-pages:
```bash
npm install --save-dev gh-pages
```

---

## 📝 Checklist Rápido

- [ ] Projeto commitado no GitHub
- [ ] Secrets configuradas (se usar Actions)
- [ ] GitHub Pages ativado
- [ ] Build sem erros
- [ ] URL do Supabase atualizada com a URL do GitHub Pages

---

## 🎯 Configurar URL no Supabase

No Supabase Dashboard:
1. **Authentication** → **URL Configuration**
2. Adicione: `https://seu-usuario.github.io`
3. Salve

---

## 💡 Dicas

- Use o método automático (GitHub Actions) para deploys contínuos
- Use o método manual para testes rápidos
- O build otimizado reduz o tamanho em ~40%
- Cache do navegador pode causar problemas - use Ctrl+Shift+R para limpar

---

## 🚀 Pronto!

Seu Papinha Planner está no ar gratuitamente! 

**Próximos passos:**
1. Compartilhe a URL
2. Teste todas as funcionalidades
3. Monitore erros no console
4. Colete feedback dos usuários

---

**URL do seu app:** `https://seu-usuario.github.io/LovablePapinhaWeb/`

**Boa sorte! 💚**
