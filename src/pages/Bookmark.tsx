import React from "react";
import { useSelector } from "react-redux";
import ArticleContent from "../ui/ArticleContent";
import store from "../store";

export default function Bookmarks() {
  const savedArticles = useSelector(
    (state: RootState) => state.savedArticles.articles
  );

  return (
    <div className=" py-10 w-[85vw] mx-auto ">
      <h1 className="text-3xl font-bold mb-10">Bookmarked Articles</h1>
      {savedArticles.length === 0 ? (
        <p>No articles bookmarked.</p>
      ) : (
        <ul className="grid grid-cols-4 max-laptop:grid-cols-3 max-smallLaptop:grid-cols-2 grid-rows-2 justify-items-center gap-4">
          {savedArticles.map((article, index) => (
            <li
              key={index}
              className="bg-[#fff] p-7 pb-10 rounded-[10px] shadow-2xl w-full"
            >
              <ArticleContent article={article} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
