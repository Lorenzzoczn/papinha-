-- ============================================
-- DADOS DE EXEMPLO - PAPINHA PLANNER
-- ============================================
-- Execute este script DEPOIS de criar sua conta no app
-- Substitua 'SEU_USER_ID' pelo seu UUID de usuário

-- Para obter seu user_id, execute no SQL Editor:
-- SELECT auth.uid();

-- ============================================
-- RECEITAS DE EXEMPLO
-- ============================================

-- Café da Manhã
INSERT INTO refeicoes (user_id, dia, horario, nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional, consumida)
VALUES
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '08:00',
    'Papinha de Banana com Aveia',
    10,
    '1 porção (150ml)',
    '[
      {"nome": "Banana madura", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Aveia em flocos", "quantidade": "2", "unidade": "colheres de sopa"},
      {"nome": "Leite materno ou fórmula", "quantidade": "50", "unidade": "ml"}
    ]'::jsonb,
    '1. Amasse bem a banana com um garfo\n2. Adicione a aveia e misture\n3. Acrescente o leite aos poucos até obter a consistência desejada\n4. Sirva em temperatura ambiente ou levemente aquecido',
    'Rica em fibras, potássio e energia. Ideal para o café da manhã do bebê.',
    false
  ),
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '08:00',
    'Mingau de Maçã',
    15,
    '1 porção (150ml)',
    '[
      {"nome": "Maçã", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Aveia em flocos", "quantidade": "3", "unidade": "colheres de sopa"},
      {"nome": "Água", "quantidade": "100", "unidade": "ml"},
      {"nome": "Canela em pó", "quantidade": "1", "unidade": "pitada"}
    ]'::jsonb,
    '1. Descasque e pique a maçã em cubos pequenos\n2. Cozinhe a maçã com água até ficar macia\n3. Adicione a aveia e cozinhe por mais 5 minutos\n4. Amasse ou bata no liquidificador\n5. Polvilhe canela antes de servir',
    'Maçã é rica em fibras e vitaminas. A canela ajuda na digestão.',
    false
  );

-- Almoço
INSERT INTO refeicoes (user_id, dia, horario, nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional, consumida)
VALUES
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '12:00',
    'Papinha de Frango com Batata Doce',
    25,
    '2 porções (300ml)',
    '[
      {"nome": "Peito de frango", "quantidade": "100", "unidade": "g"},
      {"nome": "Batata doce", "quantidade": "1", "unidade": "unidade média"},
      {"nome": "Cenoura", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Brócolis", "quantidade": "3", "unidade": "floretes"},
      {"nome": "Azeite extra virgem", "quantidade": "1", "unidade": "colher de chá"}
    ]'::jsonb,
    '1. Corte o frango em cubos pequenos\n2. Descasque e corte a batata doce e cenoura\n3. Cozinhe tudo junto em água até ficar bem macio\n4. Adicione o brócolis nos últimos 5 minutos\n5. Escorra e amasse com garfo ou processe\n6. Finalize com um fio de azeite',
    'Excelente fonte de proteína, vitamina A e ferro. Completa e nutritiva.',
    false
  ),
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '12:00',
    'Papinha de Carne com Abóbora',
    30,
    '2 porções (300ml)',
    '[
      {"nome": "Carne moída (patinho)", "quantidade": "100", "unidade": "g"},
      {"nome": "Abóbora", "quantidade": "150", "unidade": "g"},
      {"nome": "Batata", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Espinafre", "quantidade": "2", "unidade": "folhas"},
      {"nome": "Cebola", "quantidade": "1/4", "unidade": "unidade"}
    ]'::jsonb,
    '1. Refogue a cebola picada em um fio de água\n2. Adicione a carne moída e cozinhe\n3. Acrescente a abóbora e batata em cubos\n4. Cubra com água e cozinhe até amolecer\n5. Adicione o espinafre no final\n6. Amasse ou processe conforme a idade do bebê',
    'Rica em ferro, proteínas e vitaminas. A abóbora facilita a digestão.',
    false
  );

-- Lanche da Tarde
INSERT INTO refeicoes (user_id, dia, horario, nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional, consumida)
VALUES
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '16:00',
    'Papinha de Maçã com Pera',
    15,
    '1 porção (150ml)',
    '[
      {"nome": "Maçã", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Pera", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Água", "quantidade": "50", "unidade": "ml"}
    ]'::jsonb,
    '1. Descasque e corte as frutas em cubos\n2. Cozinhe no vapor ou com pouca água por 10 minutos\n3. Amasse com garfo ou bata no liquidificador\n4. Ajuste a consistência com água do cozimento se necessário',
    'Frutas ricas em fibras e vitaminas. Lanche leve e refrescante.',
    false
  ),
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '16:00',
    'Vitamina de Mamão',
    5,
    '1 porção (150ml)',
    '[
      {"nome": "Mamão papaya", "quantidade": "3", "unidade": "colheres de sopa"},
      {"nome": "Banana", "quantidade": "1/2", "unidade": "unidade"},
      {"nome": "Leite materno ou fórmula", "quantidade": "100", "unidade": "ml"}
    ]'::jsonb,
    '1. Amasse o mamão e a banana\n2. Misture com o leite\n3. Bata levemente ou sirva amassado\n4. Sirva fresco',
    'Mamão ajuda no funcionamento intestinal. Rico em vitaminas A e C.',
    false
  );

-- Jantar
INSERT INTO refeicoes (user_id, dia, horario, nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional, consumida)
VALUES
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '19:00',
    'Papinha de Peixe com Mandioquinha',
    25,
    '2 porções (300ml)',
    '[
      {"nome": "Filé de peixe branco (tilápia)", "quantidade": "100", "unidade": "g"},
      {"nome": "Mandioquinha", "quantidade": "2", "unidade": "unidades"},
      {"nome": "Abobrinha", "quantidade": "1/2", "unidade": "unidade"},
      {"nome": "Tomate", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Salsinha", "quantidade": "1", "unidade": "colher de chá"}
    ]'::jsonb,
    '1. Cozinhe a mandioquinha descascada em água\n2. Adicione o peixe limpo e sem espinhas\n3. Acrescente a abobrinha e tomate picados\n4. Cozinhe até tudo ficar macio\n5. Amasse e finalize com salsinha picada',
    'Peixe é fonte de ômega-3 e proteínas. Mandioquinha é de fácil digestão.',
    false
  ),
  (
    'SEU_USER_ID',
    CURRENT_DATE,
    '19:00',
    'Sopa de Legumes com Quinoa',
    30,
    '2 porções (300ml)',
    '[
      {"nome": "Quinoa", "quantidade": "2", "unidade": "colheres de sopa"},
      {"nome": "Cenoura", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Chuchu", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Vagem", "quantidade": "5", "unidade": "unidades"},
      {"nome": "Batata", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Alho-poró", "quantidade": "1", "unidade": "rodela"}
    ]'::jsonb,
    '1. Lave bem a quinoa\n2. Corte todos os legumes em cubos\n3. Cozinhe tudo junto com água suficiente\n4. Quando estiver macio, amasse ou processe\n5. Ajuste a consistência com água do cozimento',
    'Quinoa é proteína vegetal completa. Sopa leve e nutritiva para o jantar.',
    false
  );

-- ============================================
-- RECEITAS PARA DIAS FUTUROS
-- ============================================

-- Adicionar receitas para amanhã
INSERT INTO refeicoes (user_id, dia, horario, nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional, consumida)
VALUES
  (
    'SEU_USER_ID',
    CURRENT_DATE + INTERVAL '1 day',
    '12:00',
    'Papinha de Frango com Mandioca',
    25,
    '2 porções',
    '[
      {"nome": "Frango desfiado", "quantidade": "100", "unidade": "g"},
      {"nome": "Mandioca", "quantidade": "150", "unidade": "g"},
      {"nome": "Couve", "quantidade": "2", "unidade": "folhas"},
      {"nome": "Tomate", "quantidade": "1", "unidade": "unidade"}
    ]'::jsonb,
    '1. Cozinhe o frango e desfie\n2. Cozinhe a mandioca até ficar macia\n3. Adicione couve e tomate picados\n4. Amasse tudo junto',
    'Mandioca é fonte de energia. Couve rica em cálcio e ferro.',
    false
  ),
  (
    'SEU_USER_ID',
    CURRENT_DATE + INTERVAL '2 days',
    '12:00',
    'Risoto de Frango com Legumes',
    30,
    '2 porções',
    '[
      {"nome": "Arroz", "quantidade": "3", "unidade": "colheres de sopa"},
      {"nome": "Frango", "quantidade": "100", "unidade": "g"},
      {"nome": "Cenoura", "quantidade": "1", "unidade": "unidade"},
      {"nome": "Ervilha", "quantidade": "2", "unidade": "colheres de sopa"},
      {"nome": "Cebola", "quantidade": "1/4", "unidade": "unidade"}
    ]'::jsonb,
    '1. Refogue a cebola\n2. Adicione o arroz e o frango\n3. Acrescente água aos poucos\n4. Adicione cenoura e ervilha\n5. Cozinhe até ficar cremoso',
    'Refeição completa e saborosa. Boa aceitação pelos bebês.',
    false
  );

-- ============================================
-- PRONTO! ✅
-- ============================================
-- Agora você tem receitas de exemplo para testar o app
-- Lembre-se de substituir 'SEU_USER_ID' pelo seu UUID real
