import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';
import { useFetchRecipes } from './hooks';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const { recipes, loading, error } = useFetchRecipes(query);

  return (
    <div className="app">
      <h1>Recipe Finder 🍲</h1>
      <SearchBar query={query} setQuery={setQuery} />

      {loading && <RecipeList loading />}
      {error && <p className="error">Oops! Something went wrong.</p>}
      {!loading && !error && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default App;
