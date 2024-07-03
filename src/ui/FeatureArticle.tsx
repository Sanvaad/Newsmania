import React from "react";
import BookmarkBtn from "./BookmarkBtn";

export default function FeatureArticle({ firstArticle }) {
  if (!firstArticle) {
    return null;
  }

  if (firstArticle.title === "[`Removed`]") {
    return;
  }
  return (
    <div className="flex gap-14 mb- max-laptop:flex-col w-[85vw] mx-auto">
      <img
        src={firstArticle.urlToImage}
        alt=""
        className="h-[30rem] w-[50rem] rounded-[20px] max-tablet:w-[40rem] max-tablet:h-[20rem]"
      />

      <div>
        <div className="flex justify-between">
          <span className="text-[#737b84] ">{firstArticle.source.name}</span>

          <BookmarkBtn article={firstArticle} />
        </div>
        <a href={firstArticle.url} className="text-[1.7rem] mt-[1rem]">
          {firstArticle.title}
        </a>
        <p className="text-[1rem] text-[#737b84] mt-[1rem] mb-[2rem]">
          {firstArticle.description}
        </p>
        <span className="text-[#ba181b] ">{firstArticle.author}</span>
      </div>
    </div>
  );
}
