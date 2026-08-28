import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-slate-400">
          Scroll
        </span>

        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-white"
          />
        </div>
      </div>
    </div>
  );
}