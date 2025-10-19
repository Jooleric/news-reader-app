// src/pages/Home.jsx
import React, { useEffect, useState, useCallback } from "react";
import { fetchNews } from "../services/newsService";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import TrendingNews from "../components/TrendingNews";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);

  // ✅ Stable fetch function wrapped in useCallback
  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      let articles = await fetchNews({ country, query, category });

      // ✅ Fallback to trending if no results
      if (articles.length === 0) {
        console.warn(`No news found for ${country}, loading trending...`);
        const trending = await fetchNews({});
        articles = trending;
      }

      setNews(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, [country, query, category]);

  // ✅ Trigger fetch whenever dependencies change
  useEffect(() => {
    loadNews();
  }, [loadNews]);

  // ✅ Handle search
  const handleSearch = (term) => {
    setQuery(term);
    setCategory("general");
  };

  // ✅ Handle country selection
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setQuery("");
    setCategory("general");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4 sm:p-6 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
        🌍 Global News & Headlines
      </h1>

      {/* Search & Country Filter */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <SearchBar onSearch={handleSearch} />

        <select
          value={country}
          onChange={handleCountryChange}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-60 sm:w-48"
        >
          <option value="us">United States</option>
          <option value="ng">Nigeria</option>
          <option value="gb">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
          <option value="za">South Africa</option>
          <option value="in">India</option>
          <option value="kr">South Korea</option>
        </select>
      </div>

      {/* Category Filter */}
      <CategoryFilter selected={category} onChange={setCategory} />

      {/* Trending News */}
      <TrendingNews />

      {/* News Section */}
      <section className="w-full mt-6">
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} height={220} />
            ))}
          </div>
        ) : news.length > 0 ? (
          <NewsList news={news} />
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No articles found.
          </p>
        )}
      </section>
    </div>
  );
};

export default Home;
