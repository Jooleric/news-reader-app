// src/services/newsService.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

// ✅ Fetch news for search/category/country
export const fetchNews = async ({ country = "us", query = "", category = "general" } = {}) => {
  try {
    const params = {
      apiKey: API_KEY,
      country,
      pageSize: 15,
    };

    // Include category if it's not "general"
    if (category && category !== "general") params.category = category;

    // Include query if user searched
    if (query.trim()) params.q = query;

    const response = await axios.get(BASE_URL, { params });

    if (response.data.status === "ok") {
      return response.data.articles.map((article) => ({
        ...article,
        publishedAtFormatted: new Date(article.publishedAt).toLocaleString(),
      }));
    }

    console.warn("⚠️ No news found");
    return [];
  } catch (error) {
    console.error("❌ Error fetching news:", error.message);
    return [];
  }
};

// ✅ Fetch trending news (default: US)
export const fetchTrendingNews = async (country = "us") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        country,
        pageSize: 10,
        category: "general",
      },
    });

    if (response.data.status === "ok") {
      return response.data.articles;
    }

    console.warn("⚠️ No trending news found");
    return [];
  } catch (error) {
    console.error("❌ Error fetching trending news:", error.message);
    return [];
  }
};

// ✅ Optional: fetch news by country only
export const fetchCountryCategoryNews = async (country = "us") => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { apiKey: API_KEY, country, pageSize: 12 },
    });
    return response.data.articles || [];
  } catch (error) {
    console.error("❌ Error fetching country news:", error.message);
    return [];
  }
};
