import { PostSummary } from "../../../types/post";
import { PostCard } from "../PostCard";

interface PostFeedProps {
  posts: PostSummary[];
  loading?: boolean;
  onBookmark?: (id: string) => void;
}

export function PostFeed({ posts, loading, onBookmark }: PostFeedProps) {
  if (loading) {
    return (
      <div className="py-12 flex justify-center text-sm text-slate-400">
        Loading…
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="py-12 text-center text-sm text-slate-400">
        No posts yet. Follow some topics to get started.
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onBookmark={onBookmark} />
      ))}
    </div>
  );
}