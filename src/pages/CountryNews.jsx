// src/pages/CountryNews.jsx
import React, { useEffect, useState, useCallback } from "react";
import { fetchNews } from "../services/newsService";
import CountrySelector from "../components/CountrySelector";
import NewsList from "../components/NewsList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CountryNews = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState("us");
  const [loading, setLoading] = useState(true);

  // ✅ Wrap loadCountryNews in useCallback
  const loadCountryNews = useCallback(async () => {
    setLoading(true);
    try {
      const articles = await fetchNews({ country });
      setNews(articles);
    } catch (error) {
      console.error("Error fetching country news:", error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  }, [country]);

  useEffect(() => {
    loadCountryNews();
  }, [loadCountryNews]);

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
        🌍 Country-Specific News
      </h1>

      <div className="mb-6 w-full max-w-sm">
        <CountrySelector selectedCountry={country} onCountryChange={setCountry} />
      </div>

      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} height={200} />
          ))}
        </div>
      ) : news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p className="text-gray-500 text-center mt-6">No news found for this country.</p>
      )}
    </div>
  );
};

export default CountryNews;
