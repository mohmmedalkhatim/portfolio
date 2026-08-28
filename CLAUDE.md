# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Vite, and Firebase. It features a home page, blog system, and project showcases with rich animations using GSAP and Framer Motion.

## Development Commands

```bash
# Start dev server (default port 5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint all TypeScript/JavaScript files
npm run lint

# Format all source files
npm run format
```

## Architecture

### Routing Structure
- Uses `react-router-dom` with `createBrowserRouter`
- Routes defined in `src/router/index.tsx`
- Layout wrapper: `App.tsx` contains `<Header />`, `<AnimatedBackground />`, and `<Outlet />`
- Main routes:
  - `/` → Home page (portfolio landing)
  - `/blog` → Blog feed listing all posts
  - `/post/:id` → Individual post view

### State Management
- **Zustand** for global state with Redux DevTools integration
- Main store: `src/context/usePostStore.ts` manages all blog post state
- Store includes async actions for CRUD operations: `fetchPosts`, `fetchPostById`, `createPost`, `updatePost`, `deletePost`
- Use exported selectors (`selectPosts`, `selectSelectedPost`, etc.) to avoid unnecessary re-renders

### Firebase Integration
- Config: `src/firebase/index.ts` exports `app` and `db`
- Firestore collection: `"posts"`
- Post service layer: `src/context/services/postService.ts` handles all Firestore operations
- Filtering supports: status, tag, topic, authorUid, limit
- Auto-computed fields: `readTimeMinutes` (words ÷ 200), timestamps

### Component Organization
```
src/
├── components/
│   ├── Layout/          # Header, Sidebar, Topbar, PageContainer
│   ├── sections/        # Hero, About, Skills, TechStack (home page sections)
│   ├── shared/          # Reusable components (AnimatedBackground, AboutImage, etc.)
│   └── ui/              # Base UI primitives
├── screens/             # Page-level components (home, FeedPage, post, projects)
├── context/             # Zustand stores and services
├── data/                # Static data (aboutData, postData, theme)
├── firebase/            # Firebase initialization
├── hooks/               # Custom hooks (useCounter, useInView)
├── router/              # Route definitions
├── styles/              # Global CSS
└── types/               # TypeScript type definitions
```

### Animation Libraries
- **GSAP** + `@gsap/react` → declarative animations via `useGSAP` hook
- **Framer Motion** → component animations and transitions
- **Lenis** → smooth scrolling
- **Three.js** → 3D graphics (likely used in AnimatedBackground or project showcases)

### Styling
- **Tailwind CSS** with PostCSS and Autoprefixer
- Config: `tailwind.config.js`, `postcss.config.js`
- Global styles: `src/index.css` (imported in App.tsx)

## Key Patterns

### Post Types
- Defined in `src/types/post.ts`
- Key interfaces: `Post`, `CreatePostInput`, `UpdatePostInput`, `PostFilters`, `PostsState`
- Post fields include: title, body, topic, tags, status (draft/published), author, counts (views/likes/bookmarks), timestamps

### Working with Posts
1. Fetch posts: `usePostStore((s) => s.fetchPosts({ status: "published", limit: 10 }))`
2. Select data: `const posts = usePostStore(selectPosts)`
3. CRUD operations return promises and update store automatically
4. Error handling: check `selectPostError` and clear with `clearError()`

### Firebase Deployment
- Configured for Firebase Hosting with backend in `asia-east1` region
- Deploy: `firebase deploy` (uses `dist/` folder after build)
- Firestore rules: `firestore.rules`, indexes: `firestore.indexes.json`

## Notes
- The Firebase API key in `src/firebase/index.ts` is committed (public key, safe for client-side use)
- SWC used for faster React compilation via `@vitejs/plugin-react-swc`
- TypeScript strict mode enabled in `tsconfig.json`
