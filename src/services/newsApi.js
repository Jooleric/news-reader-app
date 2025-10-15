// src/services/newsApi.js

const API_KEY = process.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (query = "breaking-news") => {
  try {
    const response = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return { articles: [] };
  }
};

export const fetchTopHeadlines = async (country = "us") => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    return { articles: [] };
  }
};
