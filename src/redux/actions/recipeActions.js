import { ADD_RECIPE, REMOVE_RECIPE, SEARCH_RECIPE } from './actionTypes';

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const removeRecipe = (id) => ({
  type: REMOVE_RECIPE,
  payload: id,
});

export const searchRecipe = (query) => ({
  type: SEARCH_RECIPE,
  payload: query,
});
