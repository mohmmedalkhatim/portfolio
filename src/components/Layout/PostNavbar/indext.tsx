
import { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit3,
  Bell,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { Avatar } from "../../shared/Avatar";
import { TopicBar } from "../topicbar";

export function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <div>
          <header className="container app_container flex ">
      <nav className="z-20  lg:mx-44 w-full  backdrop-blur-sm px-6 py-3 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-5">
          <span
            className="text-3xl font-bold tracking-tight select-none text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            M
          </span>

          <div className="relative hidden md:flex items-center">
            <Search
              size={14}
              className="absolute left-3 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="pl-8 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm outline-none w-52 focus:bg-slate-800 focus:border-sky-500/50 transition-colors placeholder-slate-500 text-white"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
            <Edit3 size={16} />
            <span className="hidden sm:inline">Write</span>
          </button>

          <button
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Notifications"
          >
            <Bell size={20} />
          </button>

          <button className="px-4 py-2 bg-sky-500 text-white text-sm rounded-full hover:bg-sky-600 transition-colors whitespace-nowrap">
            Get unlimited access
          </button>

          <Avatar name="Amit Das" size={34} />
        </div>
      </nav>

    </header>
    <TopicBar/>
    </div>
  );
}
