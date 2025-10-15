import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
