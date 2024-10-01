import { ADD_RECIPE, REMOVE_RECIPE, SEARCH_RECIPE } from '../actions/actionTypes';

const initialState = {
  recipes: [
    { id: 1, name: 'Spaghetti Bolognese', ingredients: ['pasta', 'meat', 'tomato sauce'] },
    { id: 2, name: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk'] },
  ],
  searchQuery: '',
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, { ...action.payload, id: Date.now() }],
      };
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
