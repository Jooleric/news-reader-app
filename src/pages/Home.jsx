import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Unified fetch function
  const loadNews = async (selectedCountry = country, searchQuery = query) => {
    try {
      setLoading(true);
      const articles = await fetchNews(selectedCountry, searchQuery);
      setNews(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Fetch news when country OR query changes
  useEffect(() => {
    loadNews();
  }, [country, query]);

  // ✅ Handle search input
  const handleSearch = (term) => {
    setQuery(term); // triggers useEffect
  };

  // ✅ Handle country selection
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setQuery(""); // clear any existing search when switching countries
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        🌍 Global Breaking News & Headlines
      </h1>

      {/* Search & Country Filter */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <SearchBar onSearch={handleSearch} />

        <select
          value={country}
          onChange={handleCountryChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-60 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* News Display Section */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading news...</p>
      ) : news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p className="text-center text-gray-500 text-lg">No articles found.</p>
      )}
    </div>
  );
};

export default Home;
