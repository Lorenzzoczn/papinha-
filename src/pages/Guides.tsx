import { useState } from 'react';
import { BookOpen, ChefHat, Lightbulb } from 'lucide-react';

import { Button } from '@/components/Button';
import { SearchInput } from '@/components/SearchInput';
import { nutritionGuides, type AgeGroup } from '@/data/nutritionGuides';
import { recipeSuggestions, searchRecipes, type RecipeSuggestion } from '@/data/recipesSuggestions';

export const GuidesPage = () => {
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('4-6');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'guides' | 'recipes'>('guides');

  const currentGuide = nutritionGuides.find((g) => g.ageGroup === selectedAge);
  const filteredRecipes = searchQuery
    ? searchRecipes(searchQuery)
    : recipeSuggestions.filter((r) => r.ageGroup === selectedAge);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <span className="tag">Guias e Dicas</span>
          <h2>Alimentação Saudável</h2>
          <p>Aprenda sobre nutrição infantil e descubra receitas nutritivas</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="guides-tabs">
        <button
          className={activeTab === 'guides' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('guides')}
        >
          <BookOpen size={18} />
          Guias Nutricionais
        </button>
        <button
          className={activeTab === 'recipes' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('recipes')}
        >
          <ChefHat size={18} />
          Receitas Sugeridas
        </button>
      </div>

      {/* Age Selector */}
      <div className="age-selector">
        <span className="age-label">Idade do bebê:</span>
        <div className="age-buttons">
          {nutritionGuides.map((guide) => (
            <button
              key={guide.ageGroup}
              className={selectedAge === guide.ageGroup ? 'age-btn active' : 'age-btn'}
              onClick={() => setSelectedAge(guide.ageGroup)}
            >
              {guide.ageGroup} meses
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'guides' && currentGuide && (
        <div className="guide-content">
          <div className="guide-card glass-card">
            <h3>{currentGuide.title}</h3>
            <p className="guide-description">{currentGuide.description}</p>

            <div className="guide-section">
              <h4>📊 Frequência de Refeições</h4>
              <p>{currentGuide.mealFrequency}</p>
            </div>

            <div className="guide-section">
              <h4>🥄 Consistência</h4>
              <p>{currentGuide.consistency}</p>
            </div>

            <div className="guide-section">
              <h4>✅ Alimentos Recomendados</h4>
              <ul className="food-list recommended">
                {currentGuide.foods.recommended.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>

            <div className="guide-section">
              <h4>⚠️ Alimentos a Evitar</h4>
              <ul className="food-list avoid">
                {currentGuide.foods.avoid.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>

            <div className="guide-section">
              <h4>
                <Lightbulb size={20} /> Dicas Importantes
              </h4>
              <ul className="tips-list">
                {currentGuide.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'recipes' && (
        <div className="recipes-content">
          <div className="recipes-toolbar">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Buscar receitas..."
            />
            <span className="recipe-count">{filteredRecipes.length} receitas</span>
          </div>

          <div className="recipes-grid">
            {filteredRecipes.map((recipe, index) => (
              <RecipeSuggestionCard key={index} recipe={recipe} />
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="lp-empty-state">
              <span className="emoji">🔍</span>
              <h3>Nenhuma receita encontrada</h3>
              <p>Tente buscar por outro termo ou selecione outra faixa etária</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const RecipeSuggestionCard = ({ recipe }: { recipe: RecipeSuggestion }) => {
  const [showDetails, setShowDetails] = useState(false);

  const categoryEmoji = {
    cafe: '☕',
    almoco: '🍽️',
    lanche: '🍪',
    jantar: '🌙',
  };

  const difficultyLabel = {
    facil: '⭐ Fácil',
    medio: '⭐⭐ Médio',
    dificil: '⭐⭐⭐ Difícil',
  };

  return (
    <>
      <div className="recipe-suggestion-card glass-card" onClick={() => setShowDetails(true)}>
        <div className="recipe-header">
          <span className="recipe-emoji">{categoryEmoji[recipe.category]}</span>
          <div className="recipe-info">
            <h4>{recipe.nome_papinha}</h4>
            <div className="recipe-meta">
              <span>{difficultyLabel[recipe.difficulty]}</span>
              <span>⏱️ {recipe.tempo_preparo} min</span>
            </div>
          </div>
        </div>

        <div className="recipe-benefits">
          {recipe.benefits.slice(0, 3).map((benefit, i) => (
            <span key={i} className="benefit-tag">
              ✨ {benefit}
            </span>
          ))}
        </div>

        <div className="recipe-tags">
          {recipe.tags.slice(0, 4).map((tag, i) => (
            <span key={i} className="tag-chip">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {showDetails && (
        <div className="dialog-overlay" onClick={() => setShowDetails(false)}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <h2>{recipe.nome_papinha}</h2>

            <div className="recipe-details-meta">
              <span>{categoryEmoji[recipe.category]} {recipe.category}</span>
              <span>{difficultyLabel[recipe.difficulty]}</span>
              <span>⏱️ {recipe.tempo_preparo} min</span>
              <span>🍽️ {recipe.porcoes}</span>
            </div>

            <div className="dialog-section">
              <h4>✨ Benefícios</h4>
              <div className="benefits-list">
                {recipe.benefits.map((benefit, i) => (
                  <span key={i} className="benefit-badge">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <div className="dialog-section">
              <h4>🥘 Ingredientes</h4>
              <ul className="ingredient-list">
                {recipe.ingredientes?.map((ing, i) => (
                  <li key={i}>
                    <span>✓</span>
                    {ing.quantidade} {ing.unidade} de {ing.nome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="dialog-section">
              <h4>👩‍🍳 Modo de Preparo</h4>
              <p style={{ whiteSpace: 'pre-line' }}>{recipe.modo_preparo}</p>
            </div>

            {recipe.dica_nutricional && (
              <div className="dialog-tip">
                <strong>💡 Dica Nutricional:</strong>
                <p>{recipe.dica_nutricional}</p>
              </div>
            )}

            <div className="dialog-actions">
              <Button variant="primary" onClick={() => setShowDetails(false)}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GuidesPage;
