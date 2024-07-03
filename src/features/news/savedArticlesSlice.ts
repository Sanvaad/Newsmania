import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storeInLocalStorage, fetchFromLocalStorage } from "../../utils/helper";

const initialState = {
  articles: fetchFromLocalStorage("savedArticles"),
};

const savedArticlesSlice = createSlice({
  name: "savedArticles",
  initialState,
  reducers: {
    saveArticle: (state, action: PayloadAction<Article>) => {
      state.articles.push(action.payload);
      storeInLocalStorage("savedArticles", state.articles);
    },
    removeArticle: (state, action: PayloadAction<string>) => {
      state.articles = state.articles.filter(
        (article) => article.url !== action.payload
      );
      storeInLocalStorage("savedArticles", state.articles);
    },
  },
});

export const { saveArticle, removeArticle } = savedArticlesSlice.actions;
export default savedArticlesSlice.reducer;
