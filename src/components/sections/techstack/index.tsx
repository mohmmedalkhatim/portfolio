import { motion } from "framer-motion";

interface Tech {
    name: string;
    icon: string;
    invert?: boolean;
}
interface Tech {
    name: string;
    icon: string;
    url: string;
    invert?: boolean;
}

const techStack: Tech[] = [
    { name: "React", icon: "/icons/react.svg", url: "https://react.dev" },
    { name: "TypeScript", icon: "/icons/ts.svg", url: "https://www.typescriptlang.org" },
    { name: "Vite", icon: "/icons/vite.svg", url: "https://vitejs.dev" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg", url: "https://tailwindcss.com" },
    { name: "Mantine", icon: "/icons/mantine.svg", url: "https://mantine.dev" },
    { name: "React Router", icon: "/icons/react_router (1).svg", url: "https://reactrouter.com", invert: true },
    { name: "Motion", icon: "/icons/motionjs.svg", url: "https://motion.dev" },
    { name: "Zustand", icon: "/icons/zustand.png", url: "https://zustand-demo.pmnd.rs" },
    { name: "Tauri", icon: "/icons/tauri.svg", url: "https://tauri.app" },
    { name: "Next.js", icon: "/icons/next.svg", url: "https://nextjs.org" },
    { name: "NestJS", icon: "/icons/nestjs.svg", url: "https://nestjs.com" },
    { name: "Rust", icon: "/icons/rust-logo-blk.svg", url: "https://www.rust-lang.org" },
    { name: "Firebase", icon: "/icons/firebase.svg", url: "https://firebase.google.com" },
    { name: "JWT", icon: "/icons/New Text Document.svg", url: "https://jwt.io" , invert: true},
    { name: "Caddy", icon: "/icons/caddy.svg", url: "https://caddyserver.com" },
    { name: "PM2", icon: "/icons/pm2-logo-1.png", url: "https://pm2.keymetrics.io" },
    { name: "SeaQL", icon: "/icons/SeaQL.png", url: "https://www.sea-ql.org" },
];


function TechMarquee() {
    return (
        <div className="relative w-full overflow-hidden py-6">
            {/* Edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

            {/* Scrolling track — two identical rows for seamless loop */}
            <motion.div
                className="flex w-max gap-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 28, ease: "linear", repeat: Infinity }}
                whileHover={{ animationPlayState: "paused" }}   // pause on hover
            >
                {[...techStack, ...techStack].map((tech, i) => (
                    <div key={i} title={tech.name} className="flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity">
                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className={`w-24 h-24 object-contain ${tech.invert ? "invert" : ""}`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
export default TechMarquee;