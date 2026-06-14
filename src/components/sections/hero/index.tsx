import { motion, Variants } from "framer-motion";
import AnimatedBackground from "../../shared/animatedBackground";
import { CTAButton } from "../../ui/CTAButton";
import { ScrollIndicator } from "../../ui/scrollIndicator";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

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

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};
function Hero() {
  return (
    <>
    <AnimatedBackground /> 
    <section
      className="
        relative flex min-h-svh items- justify-center
        overflow-hidden bg-slate-950 text-white
        px-4 sm:px-6 lg:px-8
        py-24 sm:py-32
      "
      aria-label="Hero Section"
    >

      <div className="
        relative z-10 mx-auto w-full max-w-7xl
        grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12
        items-center
      ">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex lg:pl-14 flex-col items-center lg:items-start gap-6 sm:gap-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="
              inline-block rounded-full
              border border-sky-500/20 bg-sky-500/10
              px-3 py-1.5 sm:px-4 sm:py-2
              
              text-xs sm:text-sm text-sky-300
            ">
              Available for freelance work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="
              text-4xl font-extrabold tracking-tight
              sm:text-5xl md:text-6xl lg:text-7xl
              leading-[1.1]
              text-center lg:text-left
            "
          >
            Mohammed Alkhatim
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="
              text-lg font-medium text-sky-300
              sm:text-xl md:text-2xl lg:text-3xl
              text-center lg:text-left
            "
          >
            Full-Stack Developer
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="
              max-w-prose
              text-base leading-relaxed text-slate-300
              sm:text-lg sm:leading-relaxed
              text-center lg:text-left
            "
          >
            Building scalable web applications, desktop software, and modern
            digital experiences with React, TypeScript, Rust, and cloud-native
            technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="
              mt-2 flex w-full flex-col items-center gap-3
              lg:items-start
              sm:w-auto sm:flex-row sm:gap-4
            "
          >
            <CTAButton
              className="w-full sm:w-auto"
              variant="primary"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work
            </CTAButton>

            <CTAButton variant="secondary" className="w-full sm:w-auto">
              Download CV
            </CTAButton>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="
            hidden lg:flex items-center justify-center

          "
        >
          <div className="
            relative w-full max-w-sm aspect-square
            rounded-2xl overflow-hidden
            ml-24
            border border-sky-500/20
            bg-gradient-to-br from-sky-500/10 to-slate-900/50
          ">
            <img
              src="/selfimage.png"
              alt="Mohammed Alkhatim"
              className="
                w-full h-full object-cover
              "
            />
            {/* Optional: Gradient overlay */}
            <div className="
              absolute inset-0
              bg-gradient-to-t from-slate-950/40 via-transparent to-transparent
            " />
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
    </>
  );
}export default Hero