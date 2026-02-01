import React, { useState } from 'react';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setClosing(false);
  };

  const closeModal = () => {
    setClosing(true);
    setTimeout(() => setIsOpen(false), 300); // match animation duration
  };

  return (
    <>
      {/* Recipe Card */}
      <div className="recipe-card" onClick={openModal}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>{recipe.strMeal}</h3>
        <p>{recipe.strInstructions.slice(0, 100)}...</p>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className={`modal ${closing ? 'fade-out' : ''}`}
          onClick={closeModal}
          style={{ animationName: closing ? 'fadeOut' : 'fadeIn' }}
        >
          <div
            className="modal-content"
            style={{ animationName: closing ? 'modalClose' : 'modalOpen' }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <p>{recipe.strInstructions}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;

