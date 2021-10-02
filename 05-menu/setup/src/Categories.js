import React from "react";

const Categories = ({ categories, filterItems }) => {
  let id = 0;
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            key={id++}
            className="filter-btn"
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
