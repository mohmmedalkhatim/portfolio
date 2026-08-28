import { SidebarArticle } from "../../../types/post";
import { Avatar } from "../../shared/Avatar";

interface SidebarArticleItemProps {
  article: SidebarArticle;
  onClick?: (article: SidebarArticle) => void;
}

export function SidebarArticleItem({ article, onClick }: SidebarArticleItemProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(article);
    } else {
      console.log("Article clicked:", article.id);
      // TODO: Navigate to article page
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex gap-2.5 items-start py-3 cursor-pointer group border-b border-slate-800 last:border-0 hover:bg-slate-900/30 -mx-2 px-2 rounded-lg transition-colors"
    >
      <Avatar name={article.author} src={article.authorPhotoURL} size={24} />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-slate-400 mb-1 group-hover:text-slate-300 transition-colors">
          {article.author}
        </p>
        <p
          className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-sky-300 transition-colors"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {article.title}
        </p>
      </div>
    </div>
  );
}