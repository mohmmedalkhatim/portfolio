import { create } from "zustand";
import { devtools } from "zustand/middleware";
import * as postService from "./services/postService";
import type { PostsState, PostFilters, CreatePostInput, UpdatePostInput } from "../types/post";

export const usePostStore = create<PostsState>()(
  devtools(
    (set, get) => ({
      // ── Initial State ───────────────────────────────────────────────────────
      posts: [],
      selectedPost: null,
      loading: false,
      creating: false,
      updating: false,
      deleting: false,
      error: null,

      // ── Fetch List ──────────────────────────────────────────────────────────
      fetchPosts: async (filters: PostFilters = {}) => {
        set({ loading: true, error: null }, false, "fetchPosts/pending");
        try {
          const posts = await postService.fetchPosts(filters);
          set({ posts, loading: false }, false, "fetchPosts/fulfilled");
        } catch (err) {
          set(
            { error: toMessage(err), loading: false },
            false,
            "fetchPosts/rejected"
          );
        }
      },

      // ── Fetch Single ────────────────────────────────────────────────────────
      fetchPostById: async (id: string) => {
        set({ loading: true, error: null }, false, "fetchPostById/pending");
        try {
          const post = await postService.fetchPostById(id);
          set({ selectedPost: post, loading: false }, false, "fetchPostById/fulfilled");
        } catch (err) {
          set(
            { error: toMessage(err), loading: false },
            false,
            "fetchPostById/rejected"
          );
        }
      },

      // ── Create ──────────────────────────────────────────────────────────────
      createPost: async (input: CreatePostInput) => {
        set({ creating: true, error: null }, false, "createPost/pending");
        try {
          const newPost = await postService.createPost(input);
          // Optimistically prepend to list
          set(
            (s) => ({ posts: [newPost, ...s.posts], creating: false }),
            false,
            "createPost/fulfilled"
          );
          return newPost;
        } catch (err) {
          set(
            { error: toMessage(err), creating: false },
            false,
            "createPost/rejected"
          );
          return null;
        }
      },

      // ── Update ──────────────────────────────────────────────────────────────
      updatePost: async (input: UpdatePostInput) => {
        set({ updating: true, error: null }, false, "updatePost/pending");
        try {
          await postService.updatePost(input);
          // Merge changes into the list and selectedPost in one shot
          set(
            (s) => ({
              posts: s.posts.map((p) =>
                p.id === input.id ? { ...p, ...input } : p
              ),
              selectedPost:
                s.selectedPost?.id === input.id
                  ? { ...s.selectedPost, ...input }
                  : s.selectedPost,
              updating: false,
            }),
            false,
            "updatePost/fulfilled"
          );
        } catch (err) {
          set(
            { error: toMessage(err), updating: false },
            false,
            "updatePost/rejected"
          );
        }
      },

      // ── Delete ──────────────────────────────────────────────────────────────
      deletePost: async (id: string) => {
        set({ deleting: true, error: null }, false, "deletePost/pending");
        try {
          await postService.deletePost(id);
          set(
            (s) => ({
              posts: s.posts.filter((p) => p.id !== id),
              selectedPost: s.selectedPost?.id === id ? null : s.selectedPost,
              deleting: false,
            }),
            false,
            "deletePost/fulfilled"
          );
        } catch (err) {
          set(
            { error: toMessage(err), deleting: false },
            false,
            "deletePost/rejected"
          );
        }
      },

      // ── Utility ─────────────────────────────────────────────────────────────
      clearError: () => set({ error: null }, false, "clearError"),
      clearSelectedPost: () => set({ selectedPost: null }, false, "clearSelectedPost"),
    }),
    { name: "PostStore" } // label in Redux DevTools
  )
);

// ─── Selectors (use these in components to avoid unnecessary re-renders) ──────

export const selectPosts = (s: PostsState) => s.posts;
export const selectSelectedPost = (s: PostsState) => s.selectedPost;
export const selectPostError = (s: PostsState) => s.error;
export const selectIsLoading = (s: PostsState) => s.loading;
export const selectIsCreating = (s: PostsState) => s.creating;
export const selectIsUpdating = (s: PostsState) => s.updating;
export const selectIsDeleting = (s: PostsState) => s.deleting;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return "An unexpected error occurred.";
}
