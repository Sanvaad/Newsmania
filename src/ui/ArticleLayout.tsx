import React from "react";
import ArticleContent from "./ArticleContent";

export default function ArticleLayout({ articles }) {
  const filteredArticles = articles.filter(
    (article) => article.title !== "[Removed]"
  );

  return (
    <div>
      <ul className="grid grid-cols-1 smallLaptop:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 justify-items-center py-40 gap-4 w-[85vw] mx-auto">
        {filteredArticles.map((article, index) => (
          <li
            key={index}
            className="bg-[#fff] hover:bg-[#dfdfdf74] p-7 pb-10 rounded-[10px] shadow-2xl"
          >
            <ArticleContent article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}
