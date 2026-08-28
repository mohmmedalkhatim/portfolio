import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  // Actions
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    (set) => {
      // Listen to auth state changes
      onAuthStateChanged(auth, (user) => {
        set({ user, loading: false }, false, "authStateChanged");
      });

      return {
        user: null,
        loading: true,
        error: null,

        signInWithGoogle: async () => {
          set({ loading: true, error: null }, false, "signIn/pending");
          try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            set({ loading: false }, false, "signIn/fulfilled");
          } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to sign in";
            set({ error: message, loading: false }, false, "signIn/rejected");
          }
        },

        signOut: async () => {
          set({ loading: true, error: null }, false, "signOut/pending");
          try {
            await firebaseSignOut(auth);
            set({ user: null, loading: false }, false, "signOut/fulfilled");
          } catch (err) {
            const message = err instanceof Error ? err.message : "Failed to sign out";
            set({ error: message, loading: false }, false, "signOut/rejected");
          }
        },

        clearError: () => set({ error: null }, false, "clearError"),
      };
    },
    { name: "AuthStore" }
  )
);

// Selectors
export const selectUser = (s: AuthState) => s.user;
export const selectAuthLoading = (s: AuthState) => s.loading;
export const selectAuthError = (s: AuthState) => s.error;
export const selectIsAuthenticated = (s: AuthState) => s.user !== null;
