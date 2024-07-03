import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store.js";

import { removeArticle, saveArticle } from "./savedArticlesSlice.js";

export const useNews = () => {
  const dispatch = useDispatch();
  const savedArticles = useSelector(
    (state: RootState) => state.savedArticles.articles
  );

  const isArticleBookmarked = (url: string) => {
    return savedArticles.some((article) => article.url === url);
  };

  const handleBookmarkToggle = (article: any) => {
    if (isArticleBookmarked(article.url)) {
      dispatch(removeArticle(article.url));
    } else {
      dispatch(
        saveArticle({
          url: article.url,
          title: article.title,
          urlToImage: article.urlToImage,
        })
      );
    }
  };

  return {
    savedArticles,
    isArticleBookmarked,
    handleBookmarkToggle,
  };
};
