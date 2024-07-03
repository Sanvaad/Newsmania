import React from "react";
import FeatureArticle from "./FeatureArticle";
import ArticleLayout from "./ArticleLayout";

export default function News({ articles }) {
  const firstArticle =
    articles[0] && articles[0].title === "[Removed]"
      ? articles[1]
      : articles[0];
  return (
    <div className="w-full px-[2.8rem]">
      <FeatureArticle firstArticle={firstArticle} />
      <ArticleLayout articles={articles} />
    </div>
  );
}
