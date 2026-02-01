import React from 'react';
import RecipeCard from './RecipeCard';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

interface RecipeListProps {
  recipes?: Recipe[];
  loading?: boolean;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes = [], loading = false }) => {
  if (loading) {
    return (
      <div className="recipe-list">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="recipe-skeleton"></div>
        ))}
      </div>
    );
  }

  if (recipes.length === 0) return <p>No recipes found.</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div
          key={recipe.idMeal}
          style={{ animationDelay: `${index * 0.1}s` }} // stagger effect
        >
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
