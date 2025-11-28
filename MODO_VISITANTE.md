# 👋 Modo Visitante - Papinha Planner

## 🎯 O Que É?

O **Modo Visitante** permite usar o Papinha Planner **sem criar conta**, ideal para:
- 🧪 Testar o app antes de se cadastrar
- 🚀 Começar a usar imediatamente
- 🔒 Manter privacidade (dados apenas no seu navegador)
- 📱 Usar sem internet (após carregar a página)

---

## ✨ Funcionalidades

### ✅ O Que Funciona no Modo Visitante

- ✅ Adicionar, editar e deletar papinhas
- ✅ Marcar refeições como consumidas
- ✅ Visualizar calendário mensal
- ✅ Navegar por datas
- ✅ Catálogo de receitas
- ✅ Buscar receitas
- ✅ Criar refeições a partir de receitas
- ✅ Tema claro/escuro
- ✅ Todas as funcionalidades principais

### ⚠️ Limitações

- ❌ Dados **não sincronizam** entre dispositivos
- ❌ Dados **não fazem backup** automático
- ❌ Se limpar o navegador, **perde tudo**
- ❌ Não funciona em modo anônimo/privado
- ❌ Limitado a um navegador/dispositivo

---

## 🚀 Como Usar

### 1️⃣ Entrar no Modo Visitante

1. Acesse o Papinha Planner
2. Na tela de login, clique em:
   ```
   👋 Continuar como visitante
   ```
3. Pronto! Você já pode usar o app

### 2️⃣ Usar o App

Use normalmente:
- Adicione papinhas
- Marque como consumidas
- Navegue pelo calendário
- Explore receitas

### 3️⃣ Sair do Modo Visitante

Clique em **"Sair do modo visitante"** no canto superior direito.

**⚠️ ATENÇÃO:** Seus dados permanecerão salvos no navegador até você:
- Limpar o cache/cookies
- Usar modo anônimo
- Desinstalar o navegador

---

## 💾 Onde os Dados São Salvos?

### localStorage do Navegador

Os dados ficam em:
```
localStorage['papinha-guest-data']
```

**Estrutura:**
```json
{
  "meals": [
    {
      "id": 1,
      "dia": "2024-01-15",
      "horario": "12:00",
      "nome_papinha": "Papinha de Frango",
      "consumida": false,
      ...
    }
  ],
  "lastId": 1
}
```

---

## 🔄 Migrar para Conta Real

### Opção 1: Exportar e Importar (Futuro)

```javascript
// Exportar dados
const dados = guestStorage.exportData();
// Salvar em arquivo

// Após criar conta, importar
guestStorage.importData(dados);
```

### Opção 2: Recomeçar

1. Crie uma conta
2. Faça login
3. Adicione suas papinhas novamente

**💡 Dica:** Tire screenshots das suas receitas antes de migrar!

---

## 🛡️ Segurança e Privacidade

### ✅ Vantagens

- **100% privado:** Dados nunca saem do seu dispositivo
- **Sem cadastro:** Não precisa fornecer email
- **Sem rastreamento:** Nenhum dado enviado para servidor
- **Offline:** Funciona sem internet (após carregar)

### ⚠️ Cuidados

- **Backup manual:** Você é responsável pelos dados
- **Não compartilhável:** Dados ficam apenas neste navegador
- **Vulnerável:** Limpar cache = perder tudo

---

## 🔧 Gerenciar Dados

### Ver Dados Salvos

Abra o Console do navegador (F12) e digite:
```javascript
localStorage.getItem('papinha-guest-data')
```

### Exportar Dados (Manual)

```javascript
// No console
const dados = localStorage.getItem('papinha-guest-data');
console.log(dados);
// Copie e salve em um arquivo .json
```

### Limpar Dados

```javascript
// No console
localStorage.removeItem('papinha-guest-data');
localStorage.removeItem('papinha-guest-mode');
// Recarregue a página
```

### Importar Dados (Manual)

```javascript
// No console
const dados = '{"meals":[],"lastId":0}'; // Cole seus dados aqui
localStorage.setItem('papinha-guest-data', dados);
// Recarregue a página
```

---

## 🎨 Interface do Modo Visitante

### Indicador Visual

Quando estiver no modo visitante, você verá:

**No cabeçalho:**
```
Papinha Planner  [👋 Visitante]
```

**Botão de sair:**
```
[Sair do modo visitante]
```

---

## 📊 Comparação: Visitante vs Conta

| Funcionalidade | Visitante | Com Conta |
|----------------|-----------|-----------|
| Adicionar papinhas | ✅ | ✅ |
| Calendário | ✅ | ✅ |
| Receitas | ✅ | ✅ |
| Tema claro/escuro | ✅ | ✅ |
| Sincronização | ❌ | ✅ |
| Backup automático | ❌ | ✅ |
| Multi-dispositivo | ❌ | ✅ |
| Recuperação de senha | ❌ | ✅ |
| Dados seguros | ⚠️ | ✅ |

---

## 🤔 Quando Usar Cada Modo?

### Use Modo Visitante Se:

- 🧪 Quer testar o app
- 🚀 Precisa usar agora
- 🔒 Valoriza privacidade extrema
- 📱 Usa sempre o mesmo dispositivo
- 💻 Não quer criar conta

### Use Conta Real Se:

- 💾 Quer backup automático
- 📱 Usa múltiplos dispositivos
- 🔄 Quer sincronização
- 🛡️ Quer segurança extra
- 👨‍👩‍👧 Quer compartilhar com família

---

## 🐛 Problemas Comuns

### "Perdi meus dados!"

**Causa:** Limpou cache/cookies do navegador

**Solução:** 
- Não há como recuperar
- Sempre faça backup manual
- Considere criar uma conta

### "Não consigo acessar em outro dispositivo"

**Causa:** Dados ficam apenas no navegador atual

**Solução:**
- Exporte os dados manualmente
- Ou crie uma conta para sincronizar

### "Modo anônimo não salva"

**Causa:** Modo anônimo/privado não persiste dados

**Solução:**
- Use navegador normal
- Ou crie uma conta

---

## 💡 Dicas

### Para Testar

1. Use modo visitante primeiro
2. Explore todas as funcionalidades
3. Quando gostar, crie uma conta
4. Recrie suas receitas favoritas

### Para Uso Diário

1. Crie uma conta
2. Tenha backup automático
3. Acesse de qualquer lugar
4. Dados sempre seguros

### Para Privacidade

1. Use modo visitante
2. Faça backup manual regular
3. Exporte dados periodicamente
4. Salve em local seguro

---

## 🔮 Futuras Melhorias

### Planejado

- [ ] Exportar dados em JSON
- [ ] Importar dados de arquivo
- [ ] Migração automática para conta
- [ ] Backup em nuvem opcional
- [ ] Sincronização P2P

---

## 📚 Recursos Técnicos

### Para Desenvolvedores

**Arquivo:** `src/services/guestStorage.ts`

**Funções principais:**
```typescript
guestStorage.getMealsByDate(date)
guestStorage.createMeal(payload)
guestStorage.updateMeal(id, payload)
guestStorage.deleteMeal(id)
guestStorage.exportData()
guestStorage.importData(json)
```

**Verificar modo:**
```typescript
const isGuest = localStorage.getItem('papinha-guest-mode') === 'true';
```

---

## ✅ Checklist de Uso

### Antes de Começar
- [ ] Entendi que dados ficam apenas neste navegador
- [ ] Sei que preciso fazer backup manual
- [ ] Estou ciente das limitações

### Durante o Uso
- [ ] Faço backup periódico (se importante)
- [ ] Não limpo cache sem exportar dados
- [ ] Uso sempre o mesmo navegador

### Ao Migrar
- [ ] Exportei meus dados
- [ ] Criei uma conta
- [ ] Importei ou recriei receitas

---

## 🎉 Conclusão

O **Modo Visitante** é perfeito para:
- ✨ Experimentar o app
- 🚀 Começar rapidamente
- 🔒 Manter privacidade

Mas para uso sério, **crie uma conta** e tenha:
- 💾 Backup automático
- 🔄 Sincronização
- 🛡️ Segurança

---

**Aproveite o Papinha Planner! 👶💕**
