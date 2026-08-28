import { PostSummary, SidebarArticle } from "../types/post";

export const MOCK_POSTS: PostSummary[] = [
  {
    id: "1",
    title: "Your portfolio is stopping you from geting that job",
    excerpt:
      "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    coverImageURL: null,
    author: { uid: "u1", displayName: "Amit Das", photoURL: null },
    tags: ["Portfolio"],
    readTimeMinutes: 3,
    timeAgo: "4 days ago",
    isSelectedForYou: true,
  },
  {
    id: "2",
    title: "Melody mobile app: a UI UX case study",
    excerpt:
      "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    coverImageURL: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop",
    author: { uid: "u1", displayName: "Amit Das", photoURL: null },
    tags: ["UI ux Design"],
    readTimeMinutes: 3,
    timeAgo: "4 days ago",
    isSelectedForYou: true,
  },
  {
    id: "3",
    title: "Wellness app: a UI UX case study",
    excerpt:
      "An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...",
    coverImageURL: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&h=200&fit=crop",
    author: { uid: "u1", displayName: "Amit Das", photoURL: null },
    tags: ["Wellness"],
    readTimeMinutes: 5,
    timeAgo: "4 days ago",
    isSelectedForYou: false,
  },
];


export const MOCK_SIDEBAR_ARTICLES: SidebarArticle[] = [
  { id: "s1", author: "Sarah Johnson", title: "Your portfolio is stopping you from getting that job" },
  { id: "s2", author: "Mohammed Alkhatim", title: "10 React performance tips every developer should know" },
  { id: "s3", author: "Alex Chen", title: "Building scalable microservices with Node.js" },
  { id: "s4", author: "Emily Rodriguez", title: "The future of web development in 2026" },
  { id: "s5", author: "David Kim", title: "TypeScript best practices for large codebases" },
  { id: "s6", author: "Lisa Wang", title: "Mastering CSS Grid and Flexbox layouts" },
];

export const RECOMMENDED_TOPICS = [
  "Technology",
  "Money",
  "Business",
  "Productivity",
  "Art",
  "Mindfullness",
  "Yada Yada",
];