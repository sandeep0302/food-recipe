import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe } from '../redux/actions/recipeActions';

const RecipeList = () => {
  const { recipes, searchQuery } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found!</p>
      ) : (
        <ul className="list-group">
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id} className="list-group-item d-flex justify-content-between">
              <div>
                <h5>{recipe.name}</h5>
                <p>{recipe.ingredients.join(', ')}</p>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => dispatch(removeRecipe(recipe.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
