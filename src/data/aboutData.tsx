import { AboutData } from "../types/about.types";


export const ABOUT: AboutData = {
  name: "Muhammed Alkhatim",
  role: "Full-Stack Developer",
  bio: [
    "I've always been fascinated by how technology can solve real-world problems. What started as curiosity about how websites worked turned into a fulfilling career where I get to build things that actually help people.",
    "I don't believe in perfect code — I believe in code that works, that's maintainable, and that solves the problem at hand. I've learned that the best solutions come from collaboration, curiosity, and a willingness to admit what you don't know.",
    "When I'm not coding, you'll find me contributing to open source, mentoring junior developers, or exploring new hiking trails. I think the best developers are the ones who stay curious and never stop learning.",
  ],
  stats: [
    {
      id: "exp",
      value: 8,
      suffix: "+",
      label: "Years of Experience",
      delta: "+2.5% vs last year",
      positive: true,
      Icon: (<div/>),
    },
    {
      id: "proj",
      value: 45,
      suffix: "+",
      label: "Projects Shipped",
      delta: "+12 this year",
      positive: true,
      Icon: (<div/>),
    },
    {
      id: "clt",
      value: 32,
      suffix: "",
      label: "Happy Clients",
      delta: "+5 this quarter",
      positive: true,
      Icon: (<div/>),
    },
    {
      id: "oss",
      value: 127,
      suffix: "+",
      label: "Open Source Contributions",
      delta: "+23 vs last month",
      positive: true,
      Icon: (<div/>),
    },
  ],
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Tauri",
  ],
  imageAlt: "Muhammed Alkhatim — professional portrait",
};
