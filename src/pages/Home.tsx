import React, { useEffect, useState } from "react";
import SearchBar from "../ui/SearchBar";
import Heading from "../ui/Heading";
import News from "../ui/News";
import Categories from "../ui/Categories";
import { getNews } from "../services/apiNews";
import { useFetchNews } from "../hooks/useFetchNews";
import { useHandleCategoryClick } from "../hooks/useHandleCategoryClick";

export default function Home() {
  const initialCategory = "general";

  const { articles, error, setArticles, setError } =
    useFetchNews(initialCategory);

  const handleCategoryClick = useHandleCategoryClick(setArticles, setError);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = [
    "general",

    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <Heading />
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryClick={onCategoryClick}
      />
      <News articles={articles} />
    </>
  );
}
