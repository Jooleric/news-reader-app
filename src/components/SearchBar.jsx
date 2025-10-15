import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search by country or topic..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-l-lg px-4 py-2 w-72 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-r-lg hover:bg-blue-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
