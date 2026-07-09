import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MOCK_POSTS } from "../../data/postData";

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = MOCK_POSTS.find((p) => p.id === id);

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

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="max-w-3xl mx-auto px-6 py-12">
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
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 font-medium">
                {post.author.displayName.split(" ").map(n => n[0]).join("").toUpperCase()}
              </div>
              <div>
                <p className="text-white font-medium">{post.author.displayName}</p>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span>{post.timeAgo}</span>
                  <span>·</span>
                  <span>{post.readTimeMinutes} min read</span>
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
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="text-slate-300 leading-relaxed space-y-6">
              <p>
                This is a placeholder for the full post content. In a real application,
                you would fetch the complete article content from your backend API or
                content management system.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Takeaways</h2>

              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <ul className="list-disc list-inside space-y-2 text-slate-300">
                <li>Understanding the fundamentals is crucial for success</li>
                <li>Practice and consistency lead to mastery</li>
                <li>Always be learning and adapting to new technologies</li>
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sm text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default PostPage;