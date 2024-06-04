import React from 'react';

const SearchBar = ({ query, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
