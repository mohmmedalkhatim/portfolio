import { Timestamp } from "firebase/firestore";

export type Author = {
  uid: string;
  displayName: string;
  photoURL: string | null;
}

export type PostStatus = "draft" | "published" | "archived";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  coverImageURL: string | null;
  author: Author;
  tags: string[];
  topic: string;
  status: PostStatus;
  readTimeMinutes: number;
  viewCount: number;
  likeCount: number;
  bookmarkCount: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  publishedAt: Timestamp | null;
}

// Omit server-managed fields when creating
export type CreatePostInput = Omit<
  Post,
  "id" | "createdAt" | "updatedAt" | "publishedAt" | "viewCount" | "likeCount" | "bookmarkCount"
>;

// All fields optional except id
export type UpdatePostInput = Partial<Omit<Post, "id" | "createdAt">> & { id: string };

export interface PostFilters {
  status?: PostStatus;
  tag?: string;
  topic?: string;
  authorUid?: string;
  limit?: number;
}

export interface PostsState {
  // Data
  posts: Post[];
  selectedPost: Post | null;

  // UI State
  loading: boolean;
  creating: boolean;
  updating: boolean;
  deleting: boolean;
  error: string | null;

  // Actions
  fetchPosts: (filters?: PostFilters) => Promise<void>;
  fetchPostById: (id: string) => Promise<void>;
  createPost: (input: CreatePostInput) => Promise<Post | null>;
  updatePost: (input: UpdatePostInput) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  clearError: () => void;
  clearSelectedPost: () => void;
}


export interface PostSummary {
  id: string;
  title: string;
  excerpt: string;
  coverImageURL: string | null;
  author: Author;
  tags: string[];
  readTimeMinutes: number;
  timeAgo: string;
  isSelectedForYou: boolean;
}

export interface SidebarArticle {
  id: string;
  title: string;
  author: string;
  authorPhotoURL?: string | null;
}