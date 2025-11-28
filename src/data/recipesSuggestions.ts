import type { Recipe } from '@/types';

export type RecipeSuggestion = Recipe & {
  category: 'cafe' | 'almoco' | 'lanche' | 'jantar';
  ageGroup: '4-6' | '6-8' | '8-12' | '12+';
  difficulty: 'facil' | 'medio' | 'dificil';
  benefits: string[];
  tags: string[];
};

export const recipeSuggestions: RecipeSuggestion[] = [
  // 4-6 MESES (8 receitas)
  {
    nome_papinha: 'Papinha de Banana com Aveia',
    category: 'cafe',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 10,
    porcoes: '1 porção (150ml)',
    ingredientes: [
      { nome: 'Banana madura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Aveia em flocos', quantidade: '2', unidade: 'colheres de sopa' },
      { nome: 'Leite materno ou fórmula', quantidade: '50', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Amasse bem a banana com um garfo\n2. Adicione a aveia e misture\n3. Acrescente o leite aos poucos até obter a consistência desejada\n4. Sirva em temperatura ambiente',
    dica_nutricional: 'Rica em fibras, potássio e energia. Ideal para o café da manhã do bebê.',
    benefits: ['Rica em fibras', 'Fonte de potássio', 'Energia natural', 'Fácil digestão'],
    tags: ['banana', 'aveia', 'café da manhã', 'rápido', 'sem cozimento'],
  },
  {
    nome_papinha: 'Papinha de Batata Doce',
    category: 'almoco',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 20,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Batata doce', quantidade: '1', unidade: 'unidade média' },
      { nome: 'Água', quantidade: '100', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Descasque e corte a batata doce em cubos\n2. Cozinhe em água até ficar bem macia\n3. Amasse bem com garfo ou passe no processador\n4. Ajuste a consistência com água do cozimento',
    dica_nutricional: 'Excelente fonte de vitamina A, importante para visão e imunidade.',
    benefits: ['Rica em vitamina A', 'Fortalece imunidade', 'Sabor naturalmente doce', 'Fácil digestão'],
    tags: ['batata doce', 'vitamina A', 'almoço', 'primeira papinha'],
  },
  {
    nome_papinha: 'Papinha de Abóbora',
    category: 'almoco',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 20,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Abóbora', quantidade: '200', unidade: 'g' },
      { nome: 'Água', quantidade: '100', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Descasque e corte a abóbora em cubos\n2. Cozinhe até ficar bem macia\n3. Amasse bem até obter consistência cremosa\n4. Sirva morno',
    dica_nutricional: 'Rica em betacaroteno e fibras. Ajuda na digestão e fortalece a imunidade.',
    benefits: ['Rica em vitamina A', 'Fácil digestão', 'Sabor suave', 'Fortalece imunidade'],
    tags: ['abóbora', 'vitamina A', 'digestão', 'primeira papinha'],
  },
  {
    nome_papinha: 'Papinha de Maçã',
    category: 'lanche',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '1 porção',
    ingredientes: [
      { nome: 'Maçã', quantidade: '1', unidade: 'unidade' },
      { nome: 'Água', quantidade: '50', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Descasque e corte a maçã em cubos\n2. Cozinhe no vapor por 10 minutos\n3. Amasse bem com garfo\n4. Sirva em temperatura ambiente',
    dica_nutricional: 'Rica em fibras e vitaminas. Ajuda no funcionamento intestinal.',
    benefits: ['Rica em fibras', 'Vitaminas C', 'Ajuda intestino', 'Sabor suave'],
    tags: ['maçã', 'frutas', 'lanche', 'fibras'],
  },
  {
    nome_papinha: 'Papinha de Cenoura',
    category: 'almoco',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 20,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Cenoura', quantidade: '2', unidade: 'unidades' },
      { nome: 'Água', quantidade: '100', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Descasque e corte as cenouras\n2. Cozinhe até ficarem bem macias\n3. Amasse ou processe\n4. Ajuste consistência com água',
    dica_nutricional: 'Excelente fonte de vitamina A e betacaroteno. Boa para visão.',
    benefits: ['Rica em vitamina A', 'Boa para visão', 'Cor atrativa', 'Sabor adocicado'],
    tags: ['cenoura', 'vitamina A', 'visão', 'colorida'],
  },
  {
    nome_papinha: 'Papinha de Pera',
    category: 'lanche',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '1 porção',
    ingredientes: [
      { nome: 'Pera madura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Água', quantidade: '30', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Descasque e corte a pera\n2. Cozinhe no vapor por 8 minutos\n3. Amasse bem\n4. Sirva morno',
    dica_nutricional: 'Suave e fácil de digerir. Rica em fibras e vitaminas.',
    benefits: ['Fácil digestão', 'Rica em fibras', 'Sabor suave', 'Hidratante'],
    tags: ['pera', 'frutas', 'lanche', 'suave'],
  },
  {
    nome_papinha: 'Papinha de Mandioquinha',
    category: 'jantar',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 25,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Mandioquinha', quantidade: '3', unidade: 'unidades' },
      { nome: 'Água', quantidade: '150', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Descasque e corte a mandioquinha\n2. Cozinhe até ficar bem macia\n3. Amasse até ficar cremosa\n4. Sirva morno',
    dica_nutricional: 'Fácil digestão e rica em carboidratos. Ideal para o jantar.',
    benefits: ['Fácil digestão', 'Energia', 'Sabor suave', 'Nutritiva'],
    tags: ['mandioquinha', 'jantar', 'digestão', 'energia'],
  },
  {
    nome_papinha: 'Papinha de Abacate',
    category: 'lanche',
    ageGroup: '4-6',
    difficulty: 'facil',
    tempo_preparo: 5,
    porcoes: '1 porção',
    ingredientes: [
      { nome: 'Abacate maduro', quantidade: '1/4', unidade: 'unidade' },
      { nome: 'Leite materno ou fórmula', quantidade: '30', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Retire a polpa do abacate\n2. Amasse bem com garfo\n3. Misture com o leite\n4. Sirva imediatamente',
    dica_nutricional: 'Rico em gorduras boas e vitaminas. Ótimo para desenvolvimento cerebral.',
    benefits: ['Gorduras boas', 'Desenvolvimento cerebral', 'Cremoso', 'Sem cozimento'],
    tags: ['abacate', 'gorduras boas', 'cérebro', 'rápido'],
  },

  // 6-8 MESES (8 receitas)
  {
    nome_papinha: 'Papinha de Frango com Legumes',
    category: 'almoco',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 30,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Peito de frango', quantidade: '100', unidade: 'g' },
      { nome: 'Batata', quantidade: '1', unidade: 'unidade' },
      { nome: 'Cenoura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Brócolis', quantidade: '3', unidade: 'floretes' },
      { nome: 'Azeite extra virgem', quantidade: '1', unidade: 'colher de chá' },
    ],
    modo_preparo:
      '1. Corte o frango em cubos pequenos\n2. Descasque e corte os legumes\n3. Cozinhe tudo junto em água até ficar macio\n4. Amasse ou desfie conforme a idade\n5. Finalize com um fio de azeite',
    dica_nutricional: 'Proteína de alta qualidade + vitaminas e minerais essenciais.',
    benefits: ['Proteína completa', 'Rico em ferro', 'Vitaminas do complexo B', 'Fortalece músculos'],
    tags: ['frango', 'proteína', 'legumes', 'completa', 'almoço'],
  },
  {
    nome_papinha: 'Papinha de Carne com Abóbora',
    category: 'jantar',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 35,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Carne moída (patinho)', quantidade: '100', unidade: 'g' },
      { nome: 'Abóbora', quantidade: '150', unidade: 'g' },
      { nome: 'Batata', quantidade: '1', unidade: 'unidade' },
      { nome: 'Espinafre', quantidade: '2', unidade: 'folhas' },
      { nome: 'Cebola', quantidade: '1/4', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Refogue a cebola picada em um fio de água\n2. Adicione a carne moída e cozinhe\n3. Acrescente a abóbora e batata em cubos\n4. Cubra com água e cozinhe até amolecer\n5. Adicione o espinafre no final\n6. Amasse conforme a idade',
    dica_nutricional: 'Rica em ferro, proteínas e vitaminas. A abóbora facilita a digestão.',
    benefits: ['Alto teor de ferro', 'Proteína de qualidade', 'Vitamina A', 'Fácil digestão'],
    tags: ['carne', 'abóbora', 'ferro', 'jantar', 'nutritiva'],
  },
  {
    nome_papinha: 'Papinha de Peixe com Batata Doce',
    category: 'almoco',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 25,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Filé de peixe branco', quantidade: '100', unidade: 'g' },
      { nome: 'Batata doce', quantidade: '1', unidade: 'unidade' },
      { nome: 'Abobrinha', quantidade: '1/2', unidade: 'unidade' },
      { nome: 'Tomate', quantidade: '1', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe a batata doce\n2. Adicione o peixe limpo\n3. Acrescente abobrinha e tomate\n4. Cozinhe até tudo ficar macio\n5. Amasse bem',
    dica_nutricional: 'Ômega-3 para desenvolvimento cerebral. Proteína leve e nutritiva.',
    benefits: ['Rico em ômega-3', 'Proteína leve', 'Desenvolvimento cerebral', 'Fácil digestão'],
    tags: ['peixe', 'ômega-3', 'cérebro', 'proteína'],
  },
  {
    nome_papinha: 'Papinha de Feijão com Arroz',
    category: 'almoco',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 30,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Feijão cozido', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Arroz cozido', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Cenoura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Couve picada', quantidade: '2', unidade: 'folhas' },
    ],
    modo_preparo:
      '1. Amasse o feijão cozido\n2. Misture com arroz\n3. Adicione cenoura cozida\n4. Finalize com couve refogada\n5. Amasse tudo junto',
    dica_nutricional: 'Combinação perfeita de proteínas vegetais. Rico em ferro.',
    benefits: ['Proteína vegetal', 'Rico em ferro', 'Fibras', 'Energia'],
    tags: ['feijão', 'arroz', 'ferro', 'proteína vegetal'],
  },
  {
    nome_papinha: 'Papinha de Frango com Mandioquinha',
    category: 'jantar',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 30,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Frango desfiado', quantidade: '100', unidade: 'g' },
      { nome: 'Mandioquinha', quantidade: '3', unidade: 'unidades' },
      { nome: 'Vagem', quantidade: '5', unidade: 'unidades' },
      { nome: 'Tomate', quantidade: '1', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe o frango e desfie\n2. Cozinhe a mandioquinha\n3. Adicione vagem e tomate\n4. Amasse tudo junto\n5. Ajuste consistência',
    dica_nutricional: 'Refeição completa e de fácil digestão. Boa para o jantar.',
    benefits: ['Proteína completa', 'Fácil digestão', 'Nutritiva', 'Saborosa'],
    tags: ['frango', 'mandioquinha', 'jantar', 'completa'],
  },
  {
    nome_papinha: 'Papinha de Carne com Beterraba',
    category: 'almoco',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 35,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Carne moída', quantidade: '100', unidade: 'g' },
      { nome: 'Beterraba', quantidade: '1', unidade: 'unidade pequena' },
      { nome: 'Batata', quantidade: '1', unidade: 'unidade' },
      { nome: 'Cenoura', quantidade: '1', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe a carne moída\n2. Adicione beterraba, batata e cenoura\n3. Cozinhe até amolecer\n4. Amasse bem\n5. Sirva morno',
    dica_nutricional: 'Beterraba é rica em ferro e ajuda na formação do sangue.',
    benefits: ['Rico em ferro', 'Formação do sangue', 'Colorida', 'Nutritiva'],
    tags: ['carne', 'beterraba', 'ferro', 'colorida'],
  },
  {
    nome_papinha: 'Mingau de Aveia com Frutas',
    category: 'cafe',
    ageGroup: '6-8',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '1 porção',
    ingredientes: [
      { nome: 'Aveia em flocos', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Leite materno ou fórmula', quantidade: '150', unidade: 'ml' },
      { nome: 'Banana amassada', quantidade: '1/2', unidade: 'unidade' },
      { nome: 'Maçã ralada', quantidade: '1/2', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe a aveia com o leite\n2. Adicione a banana amassada\n3. Misture a maçã ralada\n4. Sirva morno',
    dica_nutricional: 'Café da manhã completo e energético. Rico em fibras.',
    benefits: ['Rico em fibras', 'Energia', 'Vitaminas', 'Saciedade'],
    tags: ['aveia', 'café da manhã', 'frutas', 'energia'],
  },
  {
    nome_papinha: 'Sopa de Lentilha com Legumes',
    category: 'jantar',
    ageGroup: '6-8',
    difficulty: 'medio',
    tempo_preparo: 40,
    porcoes: '3 porções',
    ingredientes: [
      { nome: 'Lentilha', quantidade: '1/2', unidade: 'xícara' },
      { nome: 'Cenoura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Batata', quantidade: '1', unidade: 'unidade' },
      { nome: 'Cebola', quantidade: '1/4', unidade: 'unidade' },
      { nome: 'Tomate', quantidade: '1', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe a lentilha até amolecer\n2. Adicione os legumes picados\n3. Cozinhe até tudo ficar macio\n4. Amasse ou processe\n5. Ajuste consistência',
    dica_nutricional: 'Proteína vegetal de alta qualidade. Rica em ferro e fibras.',
    benefits: ['Proteína vegetal', 'Rico em ferro', 'Fibras', 'Nutritiva'],
    tags: ['lentilha', 'proteína vegetal', 'ferro', 'sopa'],
  },

  // 8-12 MESES (8 receitas)
  {
    nome_papinha: 'Omelete de Legumes',
    category: 'cafe',
    ageGroup: '8-12',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '1 porção',
    ingredientes: [
      { nome: 'Ovo', quantidade: '1', unidade: 'unidade' },
      { nome: 'Tomate picado', quantidade: '1', unidade: 'colher de sopa' },
      { nome: 'Espinafre picado', quantidade: '1', unidade: 'colher de sopa' },
      { nome: 'Queijo ralado', quantidade: '1', unidade: 'colher de sopa' },
      { nome: 'Azeite', quantidade: '1', unidade: 'colher de chá' },
    ],
    modo_preparo:
      '1. Bata o ovo com os legumes picados\n2. Aqueça uma frigideira com azeite\n3. Despeje a mistura e cozinhe em fogo baixo\n4. Adicione o queijo e dobre ao meio\n5. Corte em pedaços pequenos',
    dica_nutricional: 'Proteína completa do ovo + vitaminas dos legumes. Ótimo café da manhã!',
    benefits: ['Proteína completa', 'Rico em colina', 'Vitaminas A e D', 'Saciedade'],
    tags: ['ovo', 'proteína', 'café da manhã', 'rápido', 'nutritivo'],
  },
  {
    nome_papinha: 'Risoto de Frango com Legumes',
    category: 'almoco',
    ageGroup: '8-12',
    difficulty: 'medio',
    tempo_preparo: 30,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Arroz', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Frango desfiado', quantidade: '100', unidade: 'g' },
      { nome: 'Cenoura ralada', quantidade: '2', unidade: 'colheres de sopa' },
      { nome: 'Ervilha', quantidade: '2', unidade: 'colheres de sopa' },
      { nome: 'Cebola', quantidade: '1/4', unidade: 'unidade' },
      { nome: 'Queijo ralado', quantidade: '2', unidade: 'colheres de sopa' },
    ],
    modo_preparo:
      '1. Refogue a cebola\n2. Adicione o arroz e o frango\n3. Acrescente água aos poucos, mexendo\n4. Adicione cenoura e ervilha\n5. Cozinhe até ficar cremoso\n6. Finalize com queijo',
    dica_nutricional: 'Refeição completa e saborosa. Boa aceitação pelos bebês.',
    benefits: ['Refeição completa', 'Rico em proteínas', 'Carboidratos de qualidade', 'Cremoso e saboroso'],
    tags: ['risoto', 'frango', 'arroz', 'completo', 'almoço'],
  },
  {
    nome_papinha: 'Macarrão com Molho de Tomate e Frango',
    category: 'almoco',
    ageGroup: '8-12',
    difficulty: 'medio',
    tempo_preparo: 25,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Macarrão tipo cabelo de anjo', quantidade: '50', unidade: 'g' },
      { nome: 'Frango desfiado', quantidade: '80', unidade: 'g' },
      { nome: 'Tomate', quantidade: '2', unidade: 'unidades' },
      { nome: 'Cebola', quantidade: '1/4', unidade: 'unidade' },
      { nome: 'Manjericão', quantidade: '2', unidade: 'folhas' },
    ],
    modo_preparo:
      '1. Cozinhe o macarrão\n2. Refogue cebola e tomate\n3. Adicione o frango\n4. Misture com o macarrão\n5. Finalize com manjericão',
    dica_nutricional: 'Refeição completa e saborosa. Boa aceitação pelos bebês.',
    benefits: ['Carboidratos', 'Proteína', 'Vitaminas', 'Saboroso'],
    tags: ['macarrão', 'frango', 'tomate', 'italiano'],
  },
  {
    nome_papinha: 'Purê de Batata com Carne Moída',
    category: 'jantar',
    ageGroup: '8-12',
    difficulty: 'medio',
    tempo_preparo: 30,
    porcoes: '2 porções',
    ingredientes: [
      { nome: 'Batata', quantidade: '3', unidade: 'unidades' },
      { nome: 'Carne moída', quantidade: '100', unidade: 'g' },
      { nome: 'Cenoura ralada', quantidade: '1', unidade: 'unidade' },
      { nome: 'Leite', quantidade: '50', unidade: 'ml' },
    ],
    modo_preparo:
      '1. Cozinhe e amasse as batatas\n2. Refogue a carne com cenoura\n3. Misture o purê com leite\n4. Sirva a carne sobre o purê',
    dica_nutricional: 'Combinação clássica e nutritiva. Rico em proteínas e energia.',
    benefits: ['Proteína', 'Energia', 'Cremoso', 'Nutritivo'],
    tags: ['purê', 'carne', 'batata', 'clássico'],
  },
  {
    nome_papinha: 'Sopa de Frango com Macarrão',
    category: 'jantar',
    ageGroup: '8-12',
    difficulty: 'facil',
    tempo_preparo: 25,
    porcoes: '3 porções',
    ingredientes: [
      { nome: 'Frango em cubos', quantidade: '100', unidade: 'g' },
      { nome: 'Macarrão pequeno', quantidade: '40', unidade: 'g' },
      { nome: 'Cenoura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Batata', quantidade: '1', unidade: 'unidade' },
      { nome: 'Salsinha', quantidade: '1', unidade: 'colher de sopa' },
    ],
    modo_preparo:
      '1. Cozinhe o frango\n2. Adicione os legumes\n3. Acrescente o macarrão\n4. Cozinhe até tudo ficar macio\n5. Finalize com salsinha',
    dica_nutricional: 'Sopa reconfortante e nutritiva. Perfeita para dias frios.',
    benefits: ['Reconfortante', 'Nutritiva', 'Hidratante', 'Completa'],
    tags: ['sopa', 'frango', 'macarrão', 'reconfortante'],
  },
  {
    nome_papinha: 'Arroz com Lentilha e Legumes',
    category: 'almoco',
    ageGroup: '8-12',
    difficulty: 'medio',
    tempo_preparo: 35,
    porcoes: '3 porções',
    ingredientes: [
      { nome: 'Arroz', quantidade: '1/2', unidade: 'xícara' },
      { nome: 'Lentilha', quantidade: '1/4', unidade: 'xícara' },
      { nome: 'Cenoura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Abobrinha', quantidade: '1/2', unidade: 'unidade' },
      { nome: 'Cebola', quantidade: '1/4', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe a lentilha\n2. Refogue cebola e legumes\n3. Adicione arroz e água\n4. Misture a lentilha\n5. Cozinhe até ficar macio',
    dica_nutricional: 'Proteína vegetal completa. Rico em ferro e fibras.',
    benefits: ['Proteína vegetal', 'Rico em ferro', 'Fibras', 'Completo'],
    tags: ['arroz', 'lentilha', 'vegetariano', 'ferro'],
  },
  {
    nome_papinha: 'Panqueca de Banana e Ovo',
    category: 'cafe',
    ageGroup: '8-12',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '4 panquecas',
    ingredientes: [
      { nome: 'Banana', quantidade: '1', unidade: 'unidade' },
      { nome: 'Ovo', quantidade: '1', unidade: 'unidade' },
      { nome: 'Aveia', quantidade: '2', unidade: 'colheres de sopa' },
    ],
    modo_preparo:
      '1. Amasse a banana\n2. Misture com ovo e aveia\n3. Faça pequenas panquecas\n4. Doure dos dois lados\n5. Sirva morno',
    dica_nutricional: 'Sem açúcar e rica em nutrientes. Perfeita para o café da manhã.',
    benefits: ['Sem açúcar', 'Proteína', 'Fibras', 'Prático'],
    tags: ['panqueca', 'banana', 'café da manhã', 'sem açúcar'],
  },

  // 12+ MESES (8 receitas)
  {
    nome_papinha: 'Panqueca de Banana',
    category: 'cafe',
    ageGroup: '12+',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '4 panquecas',
    ingredientes: [
      { nome: 'Banana madura', quantidade: '1', unidade: 'unidade' },
      { nome: 'Ovo', quantidade: '1', unidade: 'unidade' },
      { nome: 'Aveia em flocos', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Canela', quantidade: '1', unidade: 'pitada' },
    ],
    modo_preparo:
      '1. Amasse a banana\n2. Misture com ovo, aveia e canela\n3. Aqueça uma frigideira antiaderente\n4. Faça pequenas panquecas\n5. Doure dos dois lados\n6. Sirva morno',
    dica_nutricional: 'Sem açúcar, rica em fibras e proteínas. Perfeita para o café da manhã!',
    benefits: ['Sem açúcar', 'Rica em fibras', 'Proteína do ovo', 'Fácil de fazer'],
    tags: ['panqueca', 'banana', 'café da manhã', 'sem açúcar', 'saudável'],
  },
  {
    nome_papinha: 'Bolinho de Legumes Assado',
    category: 'lanche',
    ageGroup: '12+',
    difficulty: 'medio',
    tempo_preparo: 40,
    porcoes: '8 bolinhos',
    ingredientes: [
      { nome: 'Batata cozida', quantidade: '2', unidade: 'unidades' },
      { nome: 'Cenoura ralada', quantidade: '1', unidade: 'xícara' },
      { nome: 'Brócolis picado', quantidade: '1/2', unidade: 'xícara' },
      { nome: 'Ovo', quantidade: '1', unidade: 'unidade' },
      { nome: 'Queijo ralado', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Farinha de aveia', quantidade: '2', unidade: 'colheres de sopa' },
    ],
    modo_preparo:
      '1. Amasse as batatas\n2. Misture todos os ingredientes\n3. Faça bolinhos pequenos\n4. Coloque em forma untada\n5. Asse a 180°C por 25 minutos\n6. Deixe esfriar antes de servir',
    dica_nutricional: 'Lanche nutritivo e prático. Pode congelar para ter sempre à mão!',
    benefits: ['Rico em vegetais', 'Pode congelar', 'Prático para lanches', 'Nutritivo'],
    tags: ['bolinho', 'legumes', 'assado', 'lanche', 'pode congelar'],
  },
  {
    nome_papinha: 'Arroz com Feijão e Carne',
    category: 'almoco',
    ageGroup: '12+',
    difficulty: 'medio',
    tempo_preparo: 35,
    porcoes: '3 porções',
    ingredientes: [
      { nome: 'Arroz', quantidade: '1', unidade: 'xícara' },
      { nome: 'Feijão cozido', quantidade: '1/2', unidade: 'xícara' },
      { nome: 'Carne em cubos', quantidade: '150', unidade: 'g' },
      { nome: 'Tomate', quantidade: '1', unidade: 'unidade' },
      { nome: 'Cebola', quantidade: '1/4', unidade: 'unidade' },
    ],
    modo_preparo:
      '1. Cozinhe o arroz\n2. Refogue a carne com cebola\n3. Adicione tomate\n4. Sirva com feijão\n5. Misture tudo',
    dica_nutricional: 'Prato brasileiro completo. Rico em proteínas e ferro.',
    benefits: ['Proteína completa', 'Rico em ferro', 'Tradicional', 'Nutritivo'],
    tags: ['arroz', 'feijão', 'carne', 'brasileiro'],
  },
  {
    nome_papinha: 'Omelete com Queijo e Tomate',
    category: 'cafe',
    ageGroup: '12+',
    difficulty: 'facil',
    tempo_preparo: 10,
    porcoes: '1 porção',
    ingredientes: [
      { nome: 'Ovo', quantidade: '2', unidade: 'unidades' },
      { nome: 'Queijo ralado', quantidade: '2', unidade: 'colheres de sopa' },
      { nome: 'Tomate picado', quantidade: '1/2', unidade: 'unidade' },
      { nome: 'Cebolinha', quantidade: '1', unidade: 'colher de chá' },
    ],
    modo_preparo:
      '1. Bata os ovos\n2. Adicione queijo e tomate\n3. Despeje na frigideira\n4. Cozinhe dos dois lados\n5. Corte em pedaços',
    dica_nutricional: 'Café da manhã rico em proteínas. Rápido e nutritivo.',
    benefits: ['Rico em proteínas', 'Rápido', 'Saboroso', 'Nutritivo'],
    tags: ['omelete', 'café da manhã', 'proteína', 'rápido'],
  },
  {
    nome_papinha: 'Macarrão com Almôndegas',
    category: 'almoco',
    ageGroup: '12+',
    difficulty: 'medio',
    tempo_preparo: 40,
    porcoes: '3 porções',
    ingredientes: [
      { nome: 'Macarrão', quantidade: '100', unidade: 'g' },
      { nome: 'Carne moída', quantidade: '200', unidade: 'g' },
      { nome: 'Ovo', quantidade: '1', unidade: 'unidade' },
      { nome: 'Molho de tomate caseiro', quantidade: '1', unidade: 'xícara' },
      { nome: 'Queijo ralado', quantidade: '3', unidade: 'colheres de sopa' },
    ],
    modo_preparo:
      '1. Misture carne com ovo e faça bolinhas\n2. Doure as almôndegas\n3. Adicione molho de tomate\n4. Cozinhe o macarrão\n5. Sirva com queijo',
    dica_nutricional: 'Refeição completa e divertida. Boa aceitação pelas crianças.',
    benefits: ['Proteína', 'Divertido', 'Completo', 'Saboroso'],
    tags: ['macarrão', 'almôndegas', 'carne', 'divertido'],
  },
  {
    nome_papinha: 'Sopa de Legumes com Frango',
    category: 'jantar',
    ageGroup: '12+',
    difficulty: 'facil',
    tempo_preparo: 30,
    porcoes: '4 porções',
    ingredientes: [
      { nome: 'Frango em cubos', quantidade: '150', unidade: 'g' },
      { nome: 'Batata', quantidade: '2', unidade: 'unidades' },
      { nome: 'Cenoura', quantidade: '2', unidade: 'unidades' },
      { nome: 'Abobrinha', quantidade: '1', unidade: 'unidade' },
      { nome: 'Macarrão pequeno', quantidade: '50', unidade: 'g' },
    ],
    modo_preparo:
      '1. Cozinhe o frango\n2. Adicione os legumes picados\n3. Acrescente o macarrão\n4. Cozinhe até tudo ficar macio\n5. Tempere levemente',
    dica_nutricional: 'Sopa nutritiva e reconfortante. Perfeita para o jantar.',
    benefits: ['Nutritiva', 'Reconfortante', 'Completa', 'Leve'],
    tags: ['sopa', 'frango', 'legumes', 'jantar'],
  },
  {
    nome_papinha: 'Hambúrguer Caseiro com Batata',
    category: 'almoco',
    ageGroup: '12+',
    difficulty: 'medio',
    tempo_preparo: 35,
    porcoes: '4 hambúrgueres',
    ingredientes: [
      { nome: 'Carne moída', quantidade: '300', unidade: 'g' },
      { nome: 'Ovo', quantidade: '1', unidade: 'unidade' },
      { nome: 'Aveia', quantidade: '3', unidade: 'colheres de sopa' },
      { nome: 'Batata para assar', quantidade: '2', unidade: 'unidades' },
      { nome: 'Cenoura ralada', quantidade: '2', unidade: 'colheres de sopa' },
    ],
    modo_preparo:
      '1. Misture carne, ovo, aveia e cenoura\n2. Faça hambúrgueres\n3. Asse ou grelhe\n4. Asse as batatas em rodelas\n5. Sirva junto',
    dica_nutricional: 'Versão saudável de hambúrguer. Sem conservantes.',
    benefits: ['Sem conservantes', 'Caseiro', 'Proteína', 'Saudável'],
    tags: ['hambúrguer', 'caseiro', 'carne', 'saudável'],
  },
  {
    nome_papinha: 'Tapioca com Frango Desfiado',
    category: 'lanche',
    ageGroup: '12+',
    difficulty: 'facil',
    tempo_preparo: 15,
    porcoes: '2 tapiocas',
    ingredientes: [
      { nome: 'Goma de tapioca', quantidade: '4', unidade: 'colheres de sopa' },
      { nome: 'Frango desfiado', quantidade: '100', unidade: 'g' },
      { nome: 'Tomate picado', quantidade: '1', unidade: 'unidade' },
      { nome: 'Queijo ralado', quantidade: '2', unidade: 'colheres de sopa' },
    ],
    modo_preparo:
      '1. Espalhe a goma na frigideira\n2. Adicione frango e tomate\n3. Polvilhe queijo\n4. Dobre ao meio\n5. Sirva morno',
    dica_nutricional: 'Lanche brasileiro nutritivo. Sem glúten.',
    benefits: ['Sem glúten', 'Proteína', 'Prático', 'Brasileiro'],
    tags: ['tapioca', 'frango', 'sem glúten', 'lanche'],
  },
];

export const getRecipesByAge = (ageGroup: string): RecipeSuggestion[] => {
  return recipeSuggestions.filter((recipe) => recipe.ageGroup === ageGroup);
};

export const getRecipesByCategory = (category: string): RecipeSuggestion[] => {
  return recipeSuggestions.filter((recipe) => recipe.category === category);
};

export const searchRecipes = (query: string): RecipeSuggestion[] => {
  const lowerQuery = query.toLowerCase();
  return recipeSuggestions.filter(
    (recipe) =>
      recipe.nome_papinha.toLowerCase().includes(lowerQuery) ||
      recipe.tags.some((tag) => tag.includes(lowerQuery)) ||
      recipe.benefits.some((benefit) => benefit.toLowerCase().includes(lowerQuery)),
  );
};
