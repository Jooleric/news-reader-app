import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ news }) => {
  if (!news || news.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg mt-6">
        No articles found. Try searching for something else.
      </p>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        w-full
        px-2 sm:px-4 md:px-6
      "
    >
      {news.map((article, index) => (
        <NewsCard key={`${article.title}-${index}`} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
