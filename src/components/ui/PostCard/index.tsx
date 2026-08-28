import { Bookmark, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostSummary } from "../../../types/post";
import { Avatar } from "../../shared/Avatar";
import { TagPill } from "../../shared/TagPill";

interface PostCardProps {
  post: PostSummary;
  onBookmark?: (id: string) => void;
}

export function PostCard({ post, onBookmark }: PostCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked((prev) => !prev);
    onBookmark?.(post.id);
  };

  const handlePostClick = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <article className="py-4 sm:py-6 border-b border-slate-800 last:border-0 hover:bg-slate-900/20 -mx-2 sm:-mx-4 px-2 sm:px-4 rounded-lg transition-colors">

      {/* Author row */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <Avatar
          name={post.author.displayName}
          src={post.author.photoURL}
          size={24}
        />
        <span className="text-xs sm:text-sm text-slate-300 truncate">{post.author.displayName}</span>
        <span className="text-slate-600 text-xs sm:text-sm">·</span>
        <span className="text-xs sm:text-sm text-slate-500">{post.timeAgo}</span>
      </div>

      {/* Content + Thumbnail */}
      <div className="flex gap-3 sm:gap-6 items-start cursor-pointer" onClick={handlePostClick}>
        <div className="flex-1 min-w-0">
          <h2
            className="text-base sm:text-xl font-bold text-white mb-1.5 sm:mb-2 leading-snug hover:text-sky-300 transition-colors line-clamp-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {post.title}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 rounded overflow-hidden bg-slate-900 border border-slate-800">
          {post.coverImageURL ? (
            <img
              src={post.coverImageURL}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            // Fallback placeholder — swap for a real image
            <div className="w-full h-full bg-gradient-to-br from-sky-500/20 to-slate-900 flex items-center justify-center">
              <span className="text-sky-400 text-2xl font-bold">✦</span>
            </div>
          )}
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between mt-2 sm:mt-3 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap min-w-0">
          {post.tags[0] && <TagPill label={post.tags[0]} />}
          <span className="text-[10px] sm:text-xs text-slate-500 whitespace-nowrap">{post.readTimeMinutes} min read</span>
          {post.isSelectedForYou && (
            <>
              <span className="text-slate-600 text-xs hidden sm:inline">·</span>
              <span className="text-[10px] sm:text-xs text-slate-500 hidden sm:inline whitespace-nowrap">Selected for you</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button
            onClick={handleBookmark}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark"}
            className={`transition-colors ${
              bookmarked ? "text-sky-400" : "text-slate-500 hover:text-slate-300"
            }`}
          >
            <Bookmark size={16} className="sm:w-[18px] sm:h-[18px]" fill={bookmarked ? "currentColor" : "none"} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("More options clicked for post:", post.id);
            }}
            aria-label="More options"
            className="text-slate-500 hover:text-slate-300 transition-colors"
          >
            <MoreHorizontal size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </article>
  );
}
