import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950">
      {/* Radial gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,81,255,0.1),rgba(15,23,42,0))]" />
      
      {/* Grid pattern - subtle */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Dot pattern accent */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(168,85,247,0.4) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Primary gradient blob - sky */}
      <motion.div
        animate={{
          x: [0, 150, 50, 0],
          y: [0, -80, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-600/30 to-sky-500/10 blur-3xl filter opacity-60"
      />

      {/* Secondary gradient blob - cyan */}
      <motion.div
        animate={{
          x: [0, -120, -60, 0],
          y: [0, 100, 50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-cyan-500/20 to-blue-500/10 blur-3xl filter opacity-50"
      />

      {/* Tertiary gradient blob - indigo accent */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 60, -60, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-500/15 to-purple-500/5 blur-3xl filter opacity-40"
      />

      {/* Light leak effect - top right */}
      <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-sky-500/5 to-transparent blur-3xl opacity-30" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />
    </div>
  );
}

export default AnimatedBackground;