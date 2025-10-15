import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/newsApi";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("breaking-news");

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(query);
      if (data?.articles) setArticles(data.articles);
    };

    getNews();
  }, [query]);

  return (
    <div className="p-6">
      <SearchBar onSearch={setQuery} />
      <h1 className="text-2xl font-bold mb-4 text-center">
        Breaking News on "{query}"
      </h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default Home;
