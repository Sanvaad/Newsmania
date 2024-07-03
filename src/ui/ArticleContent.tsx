import React from "react";
import BookmarkBtn from "./BookmarkBtn";

export default function ArticleContent({ article }) {
  function truncateText(text, maxLength) {
    const words = text.split();
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    } else {
      return text;
    }
  }
  return (
    <div className=" h-[30rem] ">
      <div className="flex justify-between">
        <BookmarkBtn article={article} />
      </div>
      <img
        src={article.urlToImage}
        alt=""
        className="h-[15rem] w-full object-cover my-6"
      />
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block font-medium text-[1.1rem] overflow-hidden text-ellipsis truncate-5-lines"
      >
        {article.title}
      </a>
    </div>
  );
}
