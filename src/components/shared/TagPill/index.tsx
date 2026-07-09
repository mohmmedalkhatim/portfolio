interface TagPillProps {
  label: string;
  onClick?: () => void;
}

export function TagPill({ label, onClick }: TagPillProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs text-sky-300 hover:bg-sky-500/20 transition-colors"
    >
      {label}
    </button>
  );
}
