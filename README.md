## Lovable Papinha Planner · Web

Versão web premium do planejador de papinhas para bebês, construída com React + Vite + TypeScript. A experiência replica a estética “Apple Health + Notion Clean” da versão mobile, mas otimizada para navegadores desktop/tablet com navegação fluida em abas.

### ✨ Destaques
- Layout responsivo com navegação superior (Hoje, Calendário, Receitas), preferências de tema claro/escuro persistidas.
- CRUD completo de papinhas com Supabase (Auth + RLS) e React Query com cache persistente em `localStorage`.
- Calendário mensal interativo com indicadores de consumo e painel diário detalhado.
- Catálogo de receitas sem duplicatas com busca, modal de detalhes e criação rápida de refeições a partir de qualquer receita.
- Micro animações com Framer Motion, skeleton loaders e tipografia Inter + Poppins carregada via Google Fonts.

---

## 🚀 Setup rápido

```bash
cd papinha/LovablePapinhaWeb
npm install
echo "VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon" > .env.local
npm run dev
```

> Use `npm run build` para gerar a versão de produção e `npm run preview` para validar o bundle.

---

## 🔐 Ambiente Supabase

1. Crie um projeto em [supabase.com](https://supabase.com) e copie `Project URL` + `Anon Key` para o `.env.local` (variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`).
2. Execute o schema e seeds gerados na pasta `../LovablePapinhaPlanner/supabase` (compartilhado entre mobile e web):
   ```bash
   supabase db push -f ../LovablePapinhaPlanner/supabase/schema.sql
   supabase db query ../LovablePapinhaPlanner/supabase/seeds/seed.sql
   ```
   > No arquivo `seed.sql`, substitua `{{USER_ID}}` pelo UUID do usuário que irá receber o cardápio inicial.
3. As policies (RLS) já garantem que cada usuário só veja/edite suas refeições. O cliente web injeta `user_id` automaticamente conforme o usuário autenticado no Supabase Auth (email/senha).

---

## 🧩 Stack e arquitetura

```
src/
├─ components/        # Botões, cards, modais, drawers, skeletons, etc.
├─ hooks/             # React Query + Supabase (meals, recipes, realtime)
├─ pages/             # Hoje, Calendário, Receitas, Auth
├─ providers/         # Auth, Theme e Query providers
├─ services/          # Supabase client + serviços de refeições
├─ styles/            # global.css com tokens (cores, tipografia, sombras)
├─ types/             # Tipos compartilhados (Meal, Recipe, Ingredient)
└─ utils/             # Helpers de datas e calendário
```

- **Autenticação**: Supabase email/senha com sessão persistida (`localStorage`).
- **Tema**: toggler no cabeçalho e sincronização com `prefers-color-scheme` do sistema.
- **React Query**: cache persistente via `@tanstack/query-sync-storage-persister`, com realtime updates utilizando `supabase.channel`.
- **UI**:
  - Hoje: cards animados com progresso diário e modal/drawer para detalhes & edição.
  - Calendário: grade mensal personalizada, botões de navegação, indicadores de consumo (total vs consumido) e painel lateral.
  - Receitas: busca instantânea, modais de detalhes e criação rápida de refeição a partir da receita.

---

## 📦 Scripts úteis

| Comando            | Descrição                                              |
|--------------------|--------------------------------------------------------|
| `npm run dev`      | Ambiente de desenvolvimento (Vite + React Refresh)     |
| `npm run build`    | Compilação de produção (`dist/`)                       |
| `npm run preview`  | Preview local do bundle produzido                      |

---

## 🔁 Integração com versão mobile

Este projeto compartilha schema, seeds e serviços com a versão Expo (pasta `LovablePapinhaPlanner`). Você pode reutilizar o mesmo banco Supabase e usuários entre ambas as plataformas, mantendo consistência de dados e policies.

---

## ✅ Roadmap sugerido

- [ ] Criar dashboards nutricionais (macro/micro) no web app.
- [ ] Adicionar filtros por período e exportação em PDF/CSV.
- [ ] Habilitar notificações push/email para lembretes de papinhas (via Supabase Functions).
- [ ] Internacionalização (pt-BR/en) com fallback automático.

---

Pronto! Com o Lovable Papinha Planner Web você tem uma vitrine moderna para o portfólio, mantendo a estética premium e as funcionalidades completas do planejador de papinhas. Divirta-se construindo e personalizando! 💚🍲

