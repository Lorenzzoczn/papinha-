export type MealSlot = 'CM' | 'A' | 'LT' | 'J';

export type Ingredient = {
  nome: string;
  quantidade: string;
  unidade?: string;
};

export type Meal = {
  id: number;
  user_id: string;
  dia: string;
  horario: string;
  nome_papinha: string;
  tempo_preparo?: number | null;
  porcoes?: string | null;
  ingredientes?: Ingredient[] | null;
  modo_preparo?: string | null;
  dica_nutricional?: string | null;
  consumida: boolean;
  created_at?: string;
  updated_at?: string;
};

export type Recipe = {
  nome_papinha: string;
  tempo_preparo?: number | null;
  porcoes?: string | null;
  ingredientes?: Ingredient[] | null;
  modo_preparo?: string | null;
  dica_nutricional?: string | null;
};

