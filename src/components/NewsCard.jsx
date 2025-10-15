import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-3">
          {article.description ? article.description.slice(0, 100) + "..." : ""}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
