import type { Meal, Recipe } from '@/types';

const STORAGE_KEY = 'papinha-guest-data';

type GuestData = {
  meals: Meal[];
  lastId: number;
};

const getGuestData = (): GuestData => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Erro ao ler dados do visitante:', error);
  }
  return { meals: [], lastId: 0 };
};

const saveGuestData = (data: GuestData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Erro ao salvar dados do visitante:', error);
  }
};

export const guestStorage = {
  getMealsByDate(date: string): Meal[] {
    const data = getGuestData();
    return data.meals
      .filter((meal) => meal.dia === date)
      .sort((a, b) => a.horario.localeCompare(b.horario));
  },

  getMealsInRange(start: string, end: string): Meal[] {
    const data = getGuestData();
    return data.meals.filter((meal) => meal.dia >= start && meal.dia <= end);
  },

  getRecipes(): Recipe[] {
    const data = getGuestData();
    const recipesMap = new Map<string, Recipe>();

    data.meals.forEach((meal) => {
      if (!recipesMap.has(meal.nome_papinha)) {
        recipesMap.set(meal.nome_papinha, {
          nome_papinha: meal.nome_papinha,
          tempo_preparo: meal.tempo_preparo,
          porcoes: meal.porcoes,
          ingredientes: meal.ingredientes,
          modo_preparo: meal.modo_preparo,
          dica_nutricional: meal.dica_nutricional,
        });
      }
    });

    return Array.from(recipesMap.values());
  },

  createMeal(payload: Omit<Meal, 'id' | 'user_id' | 'created_at' | 'updated_at'>): Meal {
    const data = getGuestData();
    const newId = data.lastId + 1;
    const now = new Date().toISOString();

    const newMeal: Meal = {
      ...payload,
      id: newId,
      user_id: 'guest',
      created_at: now,
      updated_at: now,
    };

    data.meals.push(newMeal);
    data.lastId = newId;
    saveGuestData(data);

    return newMeal;
  },

  updateMeal(id: number, payload: Partial<Meal>): Meal {
    const data = getGuestData();
    const index = data.meals.findIndex((m) => m.id === id);

    if (index === -1) {
      throw new Error('Refeição não encontrada');
    }

    const updatedMeal: Meal = {
      ...data.meals[index],
      ...payload,
      updated_at: new Date().toISOString(),
    };

    data.meals[index] = updatedMeal;
    saveGuestData(data);

    return updatedMeal;
  },

  deleteMeal(id: number): void {
    const data = getGuestData();
    data.meals = data.meals.filter((m) => m.id !== id);
    saveGuestData(data);
  },

  toggleMeal(id: number, consumida: boolean): Meal {
    return this.updateMeal(id, { consumida });
  },

  clearAllData(): void {
    localStorage.removeItem(STORAGE_KEY);
  },

  exportData(): string {
    const data = getGuestData();
    return JSON.stringify(data, null, 2);
  },

  importData(jsonData: string): void {
    try {
      const data = JSON.parse(jsonData);
      saveGuestData(data);
    } catch (error) {
      throw new Error('Dados inválidos');
    }
  },
};
