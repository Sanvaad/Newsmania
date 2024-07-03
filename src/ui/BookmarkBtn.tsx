import React from "react";
import bookmarkoutline from "../images/bookmarkoutline.svg";
import bookmarkfill from "../images/bookmarkfill.svg";
import { useNews } from "../features/news/useNews";

export default function BookmarkBtn({ article }) {
  const { isArticleBookmarked, handleBookmarkToggle } = useNews();

  return (
    <div>
      <button onClick={() => handleBookmarkToggle(article)}>
        {isArticleBookmarked(article.url) ? (
          <img src={bookmarkfill} alt="" className="h-7" />
        ) : (
          <img src={bookmarkoutline} alt="" className="h-7" />
        )}
      </button>
    </div>
  );
}
