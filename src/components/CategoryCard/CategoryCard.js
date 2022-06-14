import React from "react";
import "./CategoryCard.css";

export const CategoryCard = ({ category, clickMethod, disable }) => {
  return (
    <div className= {"category-container " + (disable? 'disable-category' : '')}
        key={category.id}
        id={category.id}
        onClick={clickMethod}
      >
        {category.name}
      </div>
  );
};
