import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import { usePostStore, selectSelectedPost, selectIsLoading, selectPostError } from "../../context/usePostStore";
import { Timestamp } from "firebase/firestore";

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = usePostStore(selectSelectedPost);
  const loading = usePostStore(selectIsLoading);
  const error = usePostStore(selectPostError);
  const fetchPostById = usePostStore((s) => s.fetchPostById);
  const clearSelectedPost = usePostStore((s) => s.clearSelectedPost);
  const clearError = usePostStore((s) => s.clearError);

  useEffect(() => {
    if (id) {
      fetchPostById(id);
    }
    return () => {
      clearSelectedPost();
      clearError();
    };
  }, [id, fetchPostById, clearSelectedPost, clearError]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-sky-500 animate-spin" />
          <p className="text-slate-400">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error loading post</h1>
          <p className="text-slate-400 mb-6">{error}</p>
          <button
            onClick={() => navigate("/blog")}
            className="px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <button
            onClick={() => navigate("/blog")}
            className="px-4 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (timestamp: Timestamp) => {
    const date = new Date(timestamp.toDate());
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/blog")}
          className="flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </button>

        {/* Post Header */}
        <article>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              {post.author.photoURL ? (
                <img
                  src={post.author.photoURL}
                  alt={post.author.displayName}
                  className="w-12 h-12 rounded-full border border-slate-700"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-medium">
                  {post.author.displayName.split(" ").map(n => n[0]).join("").toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-white font-medium">{post.author.displayName}</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{formatDate(post.createdAt)}</span>
                  <span>·</span>
                  <span>{post.readTimeMinutes} min read</span>
                  {post.viewCount > 0 && (
                    <>
                      <span>·</span>
                      <span>{post.viewCount} views</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Cover Image */}
          {post.coverImageURL && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img
                src={post.coverImageURL}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-slate max-w-none">
            {post.excerpt && (
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            )}

            <div
              className="text-slate-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>

          {/* Tags and Metadata */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sm text-sky-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Engagement Stats */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              {post.likeCount > 0 && <span>{post.likeCount} likes</span>}
              {post.bookmarkCount > 0 && <span>{post.bookmarkCount} bookmarks</span>}
              {post.commentCount > 0 && <span>{post.commentCount} comments</span>}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PostPage;