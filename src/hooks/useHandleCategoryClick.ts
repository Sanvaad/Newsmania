import { getNews } from "../services/apiNews";

export const useHandleCategoryClick = (setArticles, setError) => {
  const handleCategoryClick = async (category) => {
    try {
      const newsData = await getNews(category);
      setArticles(newsData);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(error.message);
    }
  };

  return handleCategoryClick;
};
