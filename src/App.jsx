import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryNews from "./pages/CountryNews";
import ArticleDetail from "./pages/ArticleDetail";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:code" element={<CountryNews />} />
      <Route path="/article/:id" element={<ArticleDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
