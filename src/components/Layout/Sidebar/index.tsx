import { Search, X } from "lucide-react";
import { useState } from "react";
import { MOCK_SIDEBAR_ARTICLES, RECOMMENDED_TOPICS } from "../../../data/postData";
import { SidebarArticle } from "../../../types/post";
import { TopicPill } from "../../shared/TopTagPill";
import { SidebarArticleItem } from "../../ui/SidebarArtcleItem";

interface SidebarProps {
  articles?: SidebarArticle[];
  topics?: string[];
  onTopicClick?: (topic: string) => void;
}

export function Sidebar({
  articles = MOCK_SIDEBAR_ARTICLES,
  topics = RECOMMENDED_TOPICS,
  onTopicClick,
}: SidebarProps) {
  const [search, setSearch] = useState("");
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [followedTopics, setFollowedTopics] = useState<Set<string>>(new Set());

  const displayedArticles = showAllArticles ? articles : articles.slice(0, 3);

  const handleTopicClick = (topic: string) => {
    setFollowedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
    onTopicClick?.(topic);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      console.log("Searching for:", search);
      // TODO: Implement search functionality
    }
  };

  return (
    <aside className="w-72 xl:w-80 flex-shrink-0">

      {/* CTA */}
      <button className="w-full py-3 bg-sky-500 text-white text-sm rounded-full hover:bg-sky-600 transition-colors mb-6">
        Get unlimited access
      </button>

      {/* Search */}
      <form onSubmit={handleSearch} className="relative mb-6">
        <Search
          size={14}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full pl-9 pr-10 py-2.5 bg-slate-900 border border-slate-800 rounded-full text-sm outline-none focus:border-sky-500/50 transition-colors placeholder-slate-500 text-white"
        />
        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </form>

      {/* What We're Reading Today */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
          <h3 className="text-sm font-semibold text-white">
            What We're Reading Today
          </h3>
        </div>

        <div>
          {displayedArticles.map((article) => (
            <SidebarArticleItem key={article.id} article={article} />
          ))}
        </div>

        <button
          onClick={() => setShowAllArticles(!showAllArticles)}
          className="text-sm text-sky-400 hover:text-sky-300 font-medium mt-3 transition-colors"
        >
          {showAllArticles ? "Show less" : "See the full list"}
        </button>
      </div>

      {/* Recommended Topics */}
      <div>
        <h3 className="text-sm font-semibold text-white mb-3">
          Recommended Topic
        </h3>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <TopicPill
              key={topic}
              label={topic}
              onClick={() => handleTopicClick(topic)}
              isFollowed={followedTopics.has(topic)}
            />
          ))}
        </div>

        {followedTopics.size > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-800">
            <p className="text-xs text-slate-400">
              Following {followedTopics.size} {followedTopics.size === 1 ? "topic" : "topics"}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}