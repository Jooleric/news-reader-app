// src/pages/ArticleDetail.jsx
import React from "react";

const ArticleDetail = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
        📰 Article Detail
      </h1>
      <p className="text-gray-600 text-center max-w-2xl">
        Details of a selected article will appear here.
      </p>
    </div>
  );
};

export default ArticleDetail;
