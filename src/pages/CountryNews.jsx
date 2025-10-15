import React from "react";
import { fetchNews } from "../services/newsApi";


const CountryNews = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Country News Page</h1>
      <p>News filtered by country will appear here.</p>
    </div>
  );
};

export default CountryNews;
