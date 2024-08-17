import React, { useState } from "react";

function CategoryFilter({ categories, onFilter }) {
  const [activeButton, setActiveButton] = useState("All");

  function setActive(category) {
    setActiveButton(category);
    if (category === "All") {
      onFilter("");
    } else {
      onFilter(category);
    }
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={`${activeButton === category ? "selected" : ""}`}
          onClick={() => setActive(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
