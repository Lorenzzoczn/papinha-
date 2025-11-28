-- ============================================
-- PAPINHA PLANNER - SETUP COMPLETO DO BANCO
-- ============================================
-- Execute este script no SQL Editor do Supabase
-- https://app.supabase.com → SQL Editor → New Query

-- 1. CRIAR TABELA DE REFEIÇÕES
-- ============================================
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

-- 2. CRIAR ÍNDICES PARA PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_refeicoes_user_dia ON refeicoes(user_id, dia);
CREATE INDEX IF NOT EXISTS idx_refeicoes_dia ON refeicoes(dia);
CREATE INDEX IF NOT EXISTS idx_refeicoes_user_id ON refeicoes(user_id);

-- 3. HABILITAR ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE refeicoes ENABLE ROW LEVEL SECURITY;

-- 4. CRIAR POLÍTICAS DE SEGURANÇA
-- ============================================

-- Remover políticas antigas se existirem
DROP POLICY IF EXISTS "Usuários podem ver suas próprias refeições" ON refeicoes;
DROP POLICY IF EXISTS "Usuários podem criar suas próprias refeições" ON refeicoes;
DROP POLICY IF EXISTS "Usuários podem atualizar suas próprias refeições" ON refeicoes;
DROP POLICY IF EXISTS "Usuários podem deletar suas próprias refeições" ON refeicoes;

-- Criar novas políticas
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

-- 5. CRIAR FUNÇÃO PARA LISTAR RECEITAS ÚNICAS
-- ============================================
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

-- 6. CRIAR TRIGGER PARA ATUALIZAR updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_refeicoes_updated_at ON refeicoes;

CREATE TRIGGER update_refeicoes_updated_at
  BEFORE UPDATE ON refeicoes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 7. INSERIR DADOS DE EXEMPLO (OPCIONAL)
-- ============================================
-- Descomente as linhas abaixo para inserir receitas de exemplo
-- IMPORTANTE: Substitua 'SEU_USER_ID_AQUI' pelo seu UUID de usuário
-- Você pode obter seu user_id executando: SELECT auth.uid();

/*
INSERT INTO refeicoes (user_id, dia, horario, nome_papinha, tempo_preparo, porcoes, ingredientes, modo_preparo, dica_nutricional, consumida)
VALUES
  (
    'SEU_USER_ID_AQUI',
    CURRENT_DATE,
    '08:00',
    'Papinha de Banana com Aveia',
    10,
    '1 porção',
    '[{"nome": "Banana", "quantidade": "1", "unidade": "unidade"}, {"nome": "Aveia", "quantidade": "2", "unidade": "colheres"}]'::jsonb,
    '1. Amasse a banana\n2. Misture com a aveia\n3. Sirva morno',
    'Rica em fibras e potássio',
    false
  ),
  (
    'SEU_USER_ID_AQUI',
    CURRENT_DATE,
    '12:00',
    'Papinha de Frango com Batata Doce',
    25,
    '2 porções',
    '[{"nome": "Frango", "quantidade": "100", "unidade": "g"}, {"nome": "Batata doce", "quantidade": "1", "unidade": "unidade"}, {"nome": "Cenoura", "quantidade": "1", "unidade": "unidade"}]'::jsonb,
    '1. Cozinhe o frango\n2. Cozinhe a batata doce e cenoura\n3. Amasse tudo junto\n4. Ajuste a consistência com água do cozimento',
    'Excelente fonte de proteína e vitamina A',
    false
  ),
  (
    'SEU_USER_ID_AQUI',
    CURRENT_DATE,
    '16:00',
    'Papinha de Maçã com Pera',
    15,
    '1 porção',
    '[{"nome": "Maçã", "quantidade": "1", "unidade": "unidade"}, {"nome": "Pera", "quantidade": "1", "unidade": "unidade"}]'::jsonb,
    '1. Descasque e corte as frutas\n2. Cozinhe no vapor por 10 minutos\n3. Amasse ou bata no liquidificador',
    'Frutas ricas em fibras e vitaminas',
    false
  );
*/

-- ============================================
-- SETUP COMPLETO! ✅
-- ============================================
-- Agora você pode:
-- 1. Criar um usuário no app (Sign Up)
-- 2. Fazer login
-- 3. Começar a usar o Papinha Planner!
