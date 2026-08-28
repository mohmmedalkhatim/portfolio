import { useCallback, useEffect, useMemo } from "react";
import { PostFeed } from "../../components/ui/PostFeed";
import { Sidebar } from "../../components/Layout/Sidebar";
import { usePostStore, selectPosts, selectIsLoading, selectPostError } from "../../context/usePostStore";
import type { Post, PostSummary } from "../../types/post";

function formatTimeAgo(timestamp: { seconds: number; nanoseconds: number } | null): string {
  if (!timestamp) return "Unknown";

  const now = Date.now();
  const postTime = timestamp.seconds * 1000;
  const diffMs = now - postTime;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return new Date(postTime).toLocaleDateString();
}

function postToSummary(post: Post): PostSummary {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    coverImageURL: post.coverImageURL,
    author: post.author,
    tags: post.tags,
    readTimeMinutes: post.readTimeMinutes,
    timeAgo: formatTimeAgo(post.publishedAt),
    isSelectedForYou: false, // Can be enhanced with recommendation logic
  };
}

export default function FeedPage() {
  const posts = usePostStore(selectPosts);
  const loading = usePostStore(selectIsLoading);
  const error = usePostStore(selectPostError);
  const fetchPosts = usePostStore((s) => s.fetchPosts);

  useEffect(() => {
    fetchPosts({ status: "published", limit: 50 });
    console.error(error)
  }, [fetchPosts]);

  const postSummaries = useCallback(() => posts.map(postToSummary), [posts])();

  return (
    <div className="pt-[4.5rem] min-h-screen">
      <div className="w-full px-8 sm:px-6 lg:px-12 pt-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            {/* Feed - Full width on mobile, flexible on desktop */}
            <main className="w-full lg:flex-1 min-w-0">
              <PostFeed posts={postSummaries} loading={loading} />
            </main>

            {/* Sidebar - Hidden on mobile/tablet, visible on desktop */}
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
