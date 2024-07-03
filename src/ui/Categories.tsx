import React, { useState } from "react";

export default function Categories({
  categories,
  onCategoryClick,
  selectedCategory,
}) {
  return (
    <div className="flex justify-center flex-wrap gap-12 w-[85vw] mx-auto mb-20 ">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`inline-block px-5 py-2 rounded-full ${
            selectedCategory === category
              ? "bg-[#c24141] hover:bg-[#c24141ac] text-white"
              : "bg-[#eae7e7] text-black"
          } hover:bg-[#c24141ac] hover:text-[#fff] `}
          onClick={() => onCategoryClick(category)}
        >
          <span className="flex">{category}</span>
        </button>
      ))}
    </div>
  );
}
