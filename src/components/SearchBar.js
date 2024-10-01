import React from 'react';
import { useDispatch } from 'react-redux';
import { searchRecipe } from '../redux/actions/recipeActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchRecipe(e.target.value));
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search recipes..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
