import React from "react";
import { fetchNews } from "../services/newsService";


const ArticleDetail = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Article Detail Page</h1>
      <p>Details of a selected article will appear here.</p>
    </div>
  );
};

export default ArticleDetail;
