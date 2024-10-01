import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions/recipeActions';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !ingredients) return;

    dispatch(addRecipe({ name, ingredients: ingredients.split(',') }));
    setName('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
