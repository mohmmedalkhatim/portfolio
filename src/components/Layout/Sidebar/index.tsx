
function Sidebar({ open, onClose }:{ open: boolean, onClose: () => void }) {
  const navItems = [
    { icon: "⊞", label: "Dashboard", active: true },
    { icon: "◈", label: "Projects" },
    { icon: "◎", label: "Analytics" },
    { icon: "◇", label: "Messages", badge: 3 },
    { icon: "◻", label: "Files" },
    { icon: "◯", label: "Settings" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 z-30 flex flex-col
          bg-[#0f1117] border-r border-white/[0.06]
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/[0.06] shrink-0">
          <span className="text-white font-semibold tracking-tight text-lg">
            <span className="text-violet-400">◈</span> aya
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map(({ icon, label, active, badge }) => (
            <button
              key={label}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                transition-colors duration-150 cursor-pointer
                ${
                  active
                    ? "bg-violet-500/20 text-violet-300"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.05]"
                }
              `}
            >
              <span className="text-base leading-none">{icon}</span>
              <span className="flex-1 text-left">{label}</span>
              {badge && (
                <span className="bg-violet-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="px-4 py-4 border-t border-white/[0.06] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center text-violet-300 text-xs font-semibold">
              MA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs font-medium truncate">mu_alkhatim</p>
              <p className="text-white/30 text-[11px] truncate">Developer</p>
            </div>
            <button className="text-white/30 hover:text-white/60 transition-colors text-sm">⋯</button>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Sidebar