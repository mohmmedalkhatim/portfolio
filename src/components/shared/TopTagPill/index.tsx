interface TopicPillProps {
  label: string;
  onClick?: () => void;
  isFollowed?: boolean;
}

export function TopicPill({ label, onClick, isFollowed = false }: TopicPillProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all ${
        isFollowed
          ? "bg-sky-500/20 border border-sky-400 text-sky-300 hover:bg-sky-500/30"
          : "bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-sky-500/50"
      }`}
    >
      {label}
      {isFollowed && (
        <span className="text-xs opacity-75">✓</span>
      )}
    </button>
  );
}
