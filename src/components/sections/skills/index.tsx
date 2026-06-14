import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";
import Skill from "../../ui/skill";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ApiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h7" />
    <polyline points="15 15 18 18 21 15" />
    <line x1="18" y1="9" x2="18" y2="18" />
  </svg>
);

const FrontendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const SystemIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12
      M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
  </svg>
);

// ─── Animation variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Skill data ───────────────────────────────────────────────────────────────

const LEFT_SKILLS = [
  {
    name: "API Design",
    icon: <ApiIcon />,
    description:
      "Designing clean, contract-first APIs that teams actually enjoy consuming. " +
      "Focused on REST semantics, versioning strategies, and consistent error handling " +
      "that makes integration predictable at scale.",
    tags: ["REST", "GraphQL", "OpenAPI", "Auth / JWT", "Rate limiting"],
  },
  {
    name: "Front-end",
    icon: <FrontendIcon />,
    description:
      "Building interfaces that feel fast and stay maintainable. Comfortable taking a " +
      "design from Figma to pixel-perfect, accessible components without reaching for " +
      "a heavy abstraction layer when a simpler one will do.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
];

const RIGHT_SKILLS = [
  {
    name: "Cloud & Deployment",
    icon: <CloudIcon />,
    description:
      "Shipping and operating services on AWS — EC2, RDS, S3, and IAM — with Docker " +
      "Compose for local parity and PM2 or systemd for process supervision. Caddy for " +
      "zero-config TLS and reverse-proxying to internal services.",
    tags: ["AWS", "Docker", "PM2", "Caddy", "Prometheus / Grafana"],
  },
  {
    name: "System Design",
    icon: <SystemIcon />,
    description:
      "Thinking through data flow, service boundaries, and failure modes before writing " +
      "the first line of code. Designing for the scale that actually exists today while " +
      "keeping the obvious next growth step cheap to reach.",
    tags: ["Distributed systems", "PostgreSQL", "Caching", "Event-driven", "Monorepo"],
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={sectionRef}
      aria-label="Skills Section"
      className="
        relative flex min-h-svh items-center justify-center
        overflow-hidden bg-slate-950 text-white
        px-4 sm:px-6 lg:px-8
        py-24 sm:py-32
      "
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2
          h-[600px] w-[800px] rounded-full
          bg-sky-700/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col gap-16 lg:px-12">

        {/* Section heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            What I bring
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Core skills
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            A focused set of disciplines — from designing the API contract to shipping
            the UI and keeping the infrastructure observable.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">

          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-5"
          >
            {LEFT_SKILLS.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                description={skill.description}
                tags={skill.tags}
                icon={skill.icon}
              />
            ))}
          </motion.div>

          {/* Right column — slight vertical offset for visual rhythm */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-5 lg:mt-10"
          >
            {RIGHT_SKILLS.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                description={skill.description}
                tags={skill.tags}
                icon={skill.icon}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Skills;