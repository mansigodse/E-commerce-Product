import React from 'react';
import './styles/CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <h2>Categories</h2>
      <ul>
        <li>
          <button
            className={!selectedCategory ? 'active' : ''}
            onClick={() => onSelectCategory('')}
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
