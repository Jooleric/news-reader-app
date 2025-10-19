import React from "react";

const NewsCard = ({ article }) => {
  const {
    urlToImage,
    title,
    description,
    publishedAtFormatted,
    url,
    source,
  } = article;

  // Default fallback image (for articles with no image)
  const fallbackImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
      <img
        src={urlToImage || fallbackImage}
        alt={title}
        className="w-full h-52 object-cover"
        loading="lazy"
      />

      <div className="flex-1 flex flex-col p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h2>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {description || "No description available."}
        </p>

        <p className="text-xs text-gray-500 mb-3">
          🕒 {publishedAtFormatted || "Unknown time"}
          {source?.name && (
            <span className="ml-2 text-gray-400">| {source.name}</span>
          )}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-blue-600 font-medium hover:underline hover:text-blue-800 transition-colors"
        >
          Read full article →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
