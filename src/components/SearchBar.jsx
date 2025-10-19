// src/components/SearchBar.jsx
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTerm = term.trim();

    if (trimmedTerm.toLowerCase().includes("breaking")) {
      onSearch("breaking-news");
    } else {
      onSearch(trimmedTerm);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);

    // Auto-reset when cleared
    if (value.trim() === "") {
      onSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl"
    >
      <input
        type="text"
        placeholder="Search global news or type 'breaking'..."
        value={term}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 w-72 sm:w-96 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-800 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-transform duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
