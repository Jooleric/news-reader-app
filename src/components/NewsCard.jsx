import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          {article.description || "No description available."}
        </p>
        <p className="text-xs text-gray-500 mb-3">
          🕒 {article.publishedAtFormatted}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
