import { useState, useEffect } from "react";
import { getNews } from "../services/apiNews";

export const useFetchNews = (initialCategory) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
        const newsData = await getNews(initialCategory);
        setArticles(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
      }
    };

    fetchInitialNews();
  }, [initialCategory]);

  return { articles, error, setArticles, setError };
};
