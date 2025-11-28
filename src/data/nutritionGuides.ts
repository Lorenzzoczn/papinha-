export type AgeGroup = '4-6' | '6-8' | '8-12' | '12+';

export type NutritionGuide = {
  ageGroup: AgeGroup;
  title: string;
  description: string;
  foods: {
    recommended: string[];
    avoid: string[];
  };
  tips: string[];
  mealFrequency: string;
  consistency: string;
};

export const nutritionGuides: NutritionGuide[] = [
  {
    ageGroup: '4-6',
    title: '4 a 6 meses - Introdução Alimentar',
    description: 'Fase inicial da introdução alimentar, com papinhas bem amassadas e alimentos um por vez.',
    foods: {
      recommended: [
        '🥕 Cenoura',
        '🥔 Batata',
        '🍠 Batata doce',
        '🎃 Abóbora',
        '🍎 Maçã',
        '🍐 Pera',
        '🍌 Banana',
        '🥑 Abacate',
        '🍚 Arroz',
        '🌾 Aveia',
      ],
      avoid: [
        '🍯 Mel (risco de botulismo)',
        '🧂 Sal',
        '🍬 Açúcar',
        '🥛 Leite de vaca integral',
        '🍓 Frutas cítricas (podem causar alergia)',
        '🥜 Oleaginosas inteiras (risco de engasgo)',
        '🍫 Chocolate',
        '☕ Café e chá preto',
      ],
    },
    tips: [
      '💡 Ofereça um alimento novo por vez (espere 3 dias para observar reações)',
      '🥄 Comece com 2-3 colheres e aumente gradualmente',
      '⏰ Mantenha horários regulares',
      '💧 Ofereça água nos intervalos',
      '😊 Respeite os sinais de saciedade do bebê',
      '🍼 Continue com leite materno ou fórmula',
    ],
    mealFrequency: '2 refeições por dia (almoço e jantar)',
    consistency: 'Papinha bem amassada, sem pedaços',
  },
  {
    ageGroup: '6-8',
    title: '6 a 8 meses - Variedade de Sabores',
    description: 'Introdução de mais variedade, proteínas e texturas levemente mais grossas.',
    foods: {
      recommended: [
        '🍗 Frango desfiado',
        '🥩 Carne moída (patinho)',
        '🐟 Peixe branco (tilápia, pescada)',
        '🥚 Gema de ovo',
        '🫘 Feijão amassado',
        '🌽 Milho',
        '🥦 Brócolis',
        '🥬 Couve',
        '🍅 Tomate',
        '🫑 Pimentão',
        '🥒 Abobrinha',
        '🍊 Laranja (suco)',
      ],
      avoid: [
        '🍯 Mel',
        '🧂 Sal em excesso',
        '🍬 Açúcar',
        '🌭 Embutidos',
        '🍟 Frituras',
        '🥤 Refrigerantes',
        '🍪 Biscoitos industrializados',
        '🧃 Sucos industrializados',
      ],
    },
    tips: [
      '💡 Introduza proteínas (frango, carne, peixe)',
      '🥄 Aumente a consistência gradualmente',
      '🌈 Varie as cores no prato',
      '🥄 Deixe o bebê pegar a comida com as mãos',
      '⏰ 3 refeições principais + lanches',
      '💧 Ofereça água regularmente',
    ],
    mealFrequency: '3 refeições + 2 lanches',
    consistency: 'Papinha amassada com pequenos pedaços macios',
  },
  {
    ageGroup: '8-12',
    title: '8 a 12 meses - Autonomia',
    description: 'Bebê começa a comer sozinho, com pedaços maiores e mais textura.',
    foods: {
      recommended: [
        '🥚 Ovo inteiro',
        '🧀 Queijos suaves',
        '🥛 Iogurte natural',
        '🍝 Macarrão',
        '🍞 Pão integral',
        '🥜 Pasta de amendoim',
        '🫘 Lentilha',
        '🫘 Grão de bico',
        '🥗 Folhas verdes',
        '🍇 Uvas (cortadas)',
        '🍉 Melancia',
        '🥝 Kiwi',
      ],
      avoid: [
        '🍯 Mel (até 1 ano)',
        '🧂 Sal em excesso',
        '🍬 Doces',
        '🌭 Embutidos',
        '🍟 Frituras',
        '🥤 Refrigerantes',
        '🍪 Ultraprocessados',
        '🥜 Oleaginosas inteiras',
      ],
    },
    tips: [
      '💡 Incentive a autonomia (deixe comer sozinho)',
      '🥄 Ofereça talheres apropriados',
      '🍽️ Coma junto com o bebê',
      '🌈 Apresente alimentos da família (sem sal)',
      '⏰ Estabeleça rotina de refeições',
      '💧 Ofereça água no copinho',
    ],
    mealFrequency: '3 refeições + 2-3 lanches',
    consistency: 'Pedaços pequenos, comida da família adaptada',
  },
  {
    ageGroup: '12+',
    title: '12+ meses - Alimentação Familiar',
    description: 'Transição para alimentação da família, com adaptações.',
    foods: {
      recommended: [
        '🍽️ Comida da família (sem sal excessivo)',
        '🥛 Leite integral',
        '🧀 Queijos variados',
        '🥚 Ovos preparados de várias formas',
        '🥗 Saladas',
        '🍲 Sopas',
        '🍝 Massas',
        '🍚 Arroz e feijão',
        '🥩 Carnes variadas',
        '🐟 Peixes',
        '🍇 Frutas variadas',
        '🥦 Legumes e verduras',
      ],
      avoid: [
        '🧂 Sal em excesso',
        '🍬 Açúcar em excesso',
        '🌭 Embutidos',
        '🍟 Frituras frequentes',
        '🥤 Refrigerantes',
        '🍪 Ultraprocessados',
        '☕ Café',
        '🍷 Bebidas alcoólicas',
      ],
    },
    tips: [
      '💡 Inclua o bebê nas refeições da família',
      '🥄 Incentive uso de talheres',
      '🌈 Varie o cardápio',
      '⏰ Mantenha horários regulares',
      '💧 Ofereça água entre as refeições',
      '😊 Seja exemplo de alimentação saudável',
    ],
    mealFrequency: '3 refeições + 2-3 lanches',
    consistency: 'Comida da família, cortada em pedaços apropriados',
  },
];

export const getGuideByAge = (ageGroup: AgeGroup): NutritionGuide | undefined => {
  return nutritionGuides.find((guide) => guide.ageGroup === ageGroup);
};
