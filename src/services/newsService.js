// src/services/newsService.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async (country = "us", query = "") => {
  try {
    let params = {
      apiKey: API_KEY,
      country,
      pageSize: 15,
    };

    // Include search query if provided
    if (query.trim() !== "") {
      params.q = query;
    }

    // First try fetching by country
    let response = await axios.get(BASE_URL, { params });

    // Fallback: if no results, fetch global headlines instead
    if (response.data.articles.length === 0) {
      console.warn(`No articles found for ${country}, fetching global news...`);

      // remove country filter and try again
      params = { apiKey: API_KEY, q: query || "breaking", pageSize: 15 };
      response = await axios.get(BASE_URL, { params });
    }

    // Format the news data
    if (response.data.status === "ok" && response.data.articles.length > 0) {
      return response.data.articles.map((article) => ({
        ...article,
        publishedAtFormatted: new Date(article.publishedAt).toLocaleString(),
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
