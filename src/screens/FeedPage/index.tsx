import { Sidebar } from "lucide-react";
import { useState } from "react";
import { Navbar } from "../../components/Layout/PostNavbar/indext";
import { TopicBar } from "../../components/Layout/topicbar";
import { PostFeed } from "../../components/ui/PostFeed";
import { MOCK_POSTS } from "../../data/postData";
import { FeedTab, FeedTabs } from "../../components/ui/FeedTap";

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState<FeedTab>("Recommended");

  /**
   * Replace with real Zustand store:
   *
   * const posts    = usePostStore(selectPosts);
   * const loading  = usePostStore(selectIsLoading);
   * const { fetchPosts } = usePostStore();
   * useEffect(() => { fetchPosts({ status: "published" }) }, [fetchPosts]);
   */
  const posts = MOCK_POSTS;
  const loading = false;

  return (
    <>
      <div className="min-h-screen top-[4.5rem] relative ">
        <Navbar />
        <div className="container app_container px-6">
          <div className="flex gap-12 lg:mx-44">

            {/* Feed */}
            <main className="flex-1 min-w-0">
              <FeedTabs activeTab={activeTab} onTabChange={setActiveTab} />
              <PostFeed posts={posts} loading={loading} />
            </main>
          </div>
        </div>
      </div>
      <Sidebar/>
      </>
  );
}
