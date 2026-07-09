
export type FeedTab = "Following" | "Recommended";

interface FeedTabsProps {
  activeTab: FeedTab;
  onTabChange: (tab: FeedTab) => void;
}

export function FeedTabs({ activeTab, onTabChange }: FeedTabsProps) {
  const tabs: FeedTab[] = ["Following", "Recommended"];

  return (
    <div className="flex border-b border-slate-800">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`py-3.5 mr-6 text-sm border-b-2 transition-colors ${
            activeTab === tab
              ? "border-sky-500 text-white font-medium"
              : "border-transparent text-slate-400 hover:text-slate-200 font-normal"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}