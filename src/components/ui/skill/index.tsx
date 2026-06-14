import { motion, Variants } from "framer-motion";
import React from "react";

type SkillProps = {
  name: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function Skill({ name, description, tags, icon, className, ...rest }: SkillProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative rounded-xl
        border border-sky-600/40 bg-slate-900/50
        text-slate-200 backdrop-blur-sm
        hover:bg-sky-950/30 hover:border-sky-500/70
        transition-colors duration-300
        p-6 flex flex-col gap-4 ${className ?? ""}`}
      {...(rest as any)}
    >
      {/* Top row: icon + name */}
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center
            rounded-lg bg-sky-600/15 text-sky-400
            group-hover:bg-sky-600/25 transition-colors duration-300">
            {icon}
          </span>
        )}
        <h3 className="text-base font-semibold tracking-wide text-slate-100 capitalize">
          {name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-700/40 bg-sky-950/50
                px-2.5 py-0.5 text-xs font-medium text-sky-300/80"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Subtle glow on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0
        group-hover:opacity-100 transition-opacity duration-500
        ring-1 ring-inset ring-sky-500/20" />
    </motion.div>
  );
}

export { itemVariants };
export default Skill;