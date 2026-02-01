import { useState, useEffect } from 'react';

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

interface APIResponse {
  meals: Recipe[] | null;
}

export const useFetchRecipes = (query: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) {
      setRecipes([]);
      return;
    }

    const fetchRecipes = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data: APIResponse = await response.json();

        // Only include recipes whose name starts with the query
        const filtered = data.meals?.filter(meal =>
          meal.strMeal.toLowerCase().startsWith(query.toLowerCase())
        ) || [];

        setRecipes(filtered);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return { recipes, loading, error };
};
