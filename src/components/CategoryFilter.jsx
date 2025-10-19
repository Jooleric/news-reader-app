// src/components/CategoryFilter.jsx
import React from "react";

const categories = [
  { key: "general", label: "All" },
  { key: "business", label: "Business" },
  { key: "technology", label: "Technology" },
  { key: "sports", label: "Sports" },
  { key: "health", label: "Health" },
  { key: "entertainment", label: "Entertainment" },
  { key: "science", label: "Science" },
];

export default function CategoryFilter({ selected, onChange }) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6 px-4">
      {categories.map((category) => (
        <button
          key={category.key}
          type="button" // ✅ Prevent accidental form submission
          onClick={() => onChange(category.key)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            selected === category.key
              ? "bg-blue-600 text-white shadow-md scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
