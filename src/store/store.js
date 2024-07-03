import { configureStore } from "@reduxjs/toolkit";
import savedArticlesReducer from "../features/news/savedArticlesSlice";

const store = configureStore({
  reducer: {
    savedArticles: savedArticlesReducer,
    // shareArticle: shareArticleReducer,s
  },
});

export default store;
