import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Food Recipe App</h1>
      <SearchBar />
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
