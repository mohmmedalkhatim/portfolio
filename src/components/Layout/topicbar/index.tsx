import { Plus } from "lucide-react";

export function TopicBar() {
  return (
    <div className=" border-b app_container   border-slate-800 ">
      <div className="flex gap-3 px-6 py-2.5   items-center  lg:mx-44">
        <button
          className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition-colors flex-shrink-0"
          aria-label="Follow a topic"
        >
          <Plus size={15} className="text-slate-400" />
        </button>
        <span className="text-sm text-slate-400">
          Keep up with the latest in any topic
        </span>
      </div>
    </div>
  );
}