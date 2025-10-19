import React, { useEffect, useState } from "react";
import { fetchTrendingNews } from "../services/newsService";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TrendingNews = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false); // 🔹 Track fallback mode

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        const data = await fetchTrendingNews();

        // Detect if fallback data (global topics) was used
        if (data.length && data.some(a => /technology|sports|world|health|business/i.test(a.title))) {
          setIsFallback(true);
        } else {
          setIsFallback(false);
        }

        setTrending(data);
      } catch (error) {
        console.error("Error fetching trending news:", error);
        setTrending([]);
      } finally {
        setLoading(false);
      }
    };

    getTrending();
  }, []);

  return (
    <section className="mt-8 w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-gray-800">🔥 Trending Now</h2>

        {/* ✅ Fallback banner */}
        {isFallback && (
          <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
            🌐 Showing global stories
          </span>
        )}
      </div>

      {/* Loading Skeletons */}
      {loading ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} height={220} />
          ))}
        </div>
      ) : trending.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trending.map((article, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition"
            >
              {article.urlToImage ? (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="rounded-md mb-2 h-40 w-full object-cover"
                />
              ) : (
                <div className="rounded-md mb-2 h-40 w-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
              <h3 className="font-medium text-lg mb-1">{article.title}</h3>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No trending articles available.
        </p>
      )}
    </section>
  );
};

export default TrendingNews;
