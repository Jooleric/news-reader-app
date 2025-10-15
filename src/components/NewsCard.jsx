import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">{article.title}</h2>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="mb-2 rounded" />
      )}
      <p>{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
