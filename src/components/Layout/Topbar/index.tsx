

function Topbar({ onMenuClick }:{ onMenuClick: () => void }) {
  return (
    <header className="h-16 bg-[#0f1117]/80 backdrop-blur-md border-b border-white/[0.06] flex items-center px-4 md:px-6 gap-4 sticky top-0 z-10 shrink-0">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden text-white/50 hover:text-white/80 transition-colors p-1"
        aria-label="Open menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-white/30">Workspace</span>
        <span className="text-white/20">/</span>
        <span className="text-white/70 font-medium">Dashboard</span>
      </div>

      <div className="flex-1" />

      {/* Search */}
      <div className="hidden sm:flex items-center gap-2 bg-white/[0.05] border border-white/[0.07] rounded-lg px-3 py-1.5 w-52">
        <svg className="w-3.5 h-3.5 text-white/30 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search…"
          className="bg-transparent text-sm text-white/60 placeholder-white/20 outline-none w-full"
        />
        <kbd className="text-[10px] text-white/20 bg-white/[0.06] px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
      </div>

      {/* Actions */}
      <button className="relative text-white/40 hover:text-white/70 transition-colors p-1.5">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-violet-400 rounded-full" />
      </button>
    </header>
  );
}
export default Topbar