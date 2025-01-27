import React from 'react';

function FilterButtons({ onFilter, currentCategory }) {
  const categories = ['all', "men's clothing", "women's clothing", 'jewelery', 'electronics'];

  return (
    <div className="filter-buttons">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={cat === currentCategory ? 'active' : ''}
        >
          {cat === 'all' ? 'All' : cat}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
