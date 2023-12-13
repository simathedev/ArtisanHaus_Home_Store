// CategoryFilterWidget.jsx
import React from 'react';

const CategoryFilterWidget = ({ categories, selectedCategory, handleCategoryChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap',justifyContent:'center',alignItems:'center', margin:'2rem 0rem' }}>
      {/* Button for 'All' category */}
      <button
        style={{ border: '1px solid black', margin: '5px', padding:'10px 20px', backgroundColor: selectedCategory === 'All' ? 'beige' : 'white' }}
        onClick={() => handleCategoryChange('All')}
      >
        All
      </button>

      {/* Map through categories */}
      {categories.map((category) => (
        <button
          key={category}
          style={{
            border: '1px solid black',
            margin: '5px',
            padding:'10px 20px',
            backgroundColor: selectedCategory === category ? 'beige' : 'white',
          }}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilterWidget;

