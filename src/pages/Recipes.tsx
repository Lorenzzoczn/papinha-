import { useMemo, useState } from 'react';

import { Button } from '@/components/Button';
import EmptyState from '@/components/EmptyState';
import MealFormDrawer, { type MealFormValues } from '@/components/MealFormDrawer';
import RecipeCard from '@/components/RecipeCard';
import RecipeDetailsDialog from '@/components/RecipeDetailsDialog';
import SearchInput from '@/components/SearchInput';
import Skeleton from '@/components/Skeleton';
import { useCreateMeal, useRecipes } from '@/hooks/useMeals';
import type { Recipe } from '@/types';

const todayISO = new Date().toISOString().slice(0, 10);

export const RecipesPage = () => {
  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [prefill, setPrefill] = useState<MealFormValues | null>(null);

  const { data: recipes = [], isLoading, refetch, isFetching } = useRecipes();
  const createMeal = useCreateMeal();

  const filteredRecipes = useMemo(() => {
    if (!search) return recipes;
    return recipes.filter((recipe) => recipe.nome_papinha.toLowerCase().includes(search.toLowerCase()));
  }, [recipes, search]);

  const handleCreateMeal = (values: MealFormValues) => {
    createMeal.mutate(
      {
        nome_papinha: values.nome_papinha,
        dia: values.dia,
        horario: values.horario.length === 5 ? `${values.horario}:00` : values.horario,
        tempo_preparo: values.tempo_preparo ? Number(values.tempo_preparo) : null,
        porcoes: values.porcoes,
        ingredientes: values.ingredientes,
        modo_preparo: values.modo_preparo,
        dica_nutricional: values.dica_nutricional,
        consumida: values.consumida,
      } as never,
      {
        onSuccess: () => setFormOpen(false),
      },
    );
  };

  const openRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDetailOpen(true);
  };

  const handleCreateFromRecipe = (recipe: Recipe) => {
    setPrefill({
      nome_papinha: recipe.nome_papinha,
      dia: todayISO,
      horario: '08:00',
      tempo_preparo: recipe.tempo_preparo ? String(recipe.tempo_preparo) : '',
      porcoes: recipe.porcoes ?? '',
      ingredientes:
        recipe.ingredientes?.map((item) => ({
          nome: item.nome,
          quantidade: item.quantidade ?? '',
          unidade: item.unidade ?? '',
        })) ?? [{ nome: '', quantidade: '', unidade: '' }],
      modo_preparo: recipe.modo_preparo ?? '',
      dica_nutricional: recipe.dica_nutricional ?? '',
      consumida: false,
    });
    setDetailOpen(false);
    setFormOpen(true);
  };

  const handleOpenQuickCreate = () => {
    setPrefill({
      nome_papinha: '',
      dia: todayISO,
      horario: '08:00',
      tempo_preparo: '',
      porcoes: '',
      ingredientes: [{ nome: '', quantidade: '', unidade: '' }],
      modo_preparo: '',
      dica_nutricional: '',
      consumida: false,
    });
    setFormOpen(true);
  };

  return (
    <section className="page">
      <header className="page-header">
        <div>
          <span className="tag">Catálogo premium</span>
          <h2>Receitas nutritivas</h2>
          <p>Descubra combinações equilibradas e adicione direto ao plano de papinhas do bebê.</p>
        </div>
        <div className="header-buttons">
          <Button variant="ghost" onClick={() => refetch()} disabled={isFetching}>
            Atualizar
          </Button>
          <Button onClick={handleOpenQuickCreate}>Adicionar manualmente</Button>
        </div>
      </header>

      <div className="recipes-toolbar">
        <SearchInput value={search} onChange={setSearch} placeholder="Buscar receita..." />
      </div>

      <div className="recipes-grid">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} height={90} />)
        ) : filteredRecipes.length ? (
          filteredRecipes.map((recipe) => <RecipeCard key={recipe.nome_papinha} recipe={recipe} onSelect={openRecipe} />)
        ) : (
          <EmptyState
            title="Nenhuma receita encontrada"
            description="Experimente alterar os termos da busca ou cadastre uma nova receita personalizada."
          />
        )}
      </div>

      <RecipeDetailsDialog
        recipe={selectedRecipe}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onCreate={handleCreateFromRecipe}
      />

      <MealFormDrawer
        open={formOpen}
        mode="create"
        initialValues={prefill ?? undefined}
        defaultDate={todayISO}
        onClose={() => setFormOpen(false)}
        onSubmit={handleCreateMeal}
        loading={createMeal.isPending}
      />
    </section>
  );
};

export default RecipesPage;

