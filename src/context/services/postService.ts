import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit as firestoreLimit,
  serverTimestamp,
  Timestamp,
  QueryConstraint,
} from "firebase/firestore";
import { db } from "../../firebase";
import type { Post, CreatePostInput, UpdatePostInput, PostFilters } from "../../types/post";

const COLLECTION = "posts";
const postsRef = () => collection(db, COLLECTION);
const postRef = (id: string) => doc(db, COLLECTION, id);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function computeReadTime(body: string): number {
  const wordCount = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function docToPost(id: string, data: Record<string, unknown>): Post {
  return { id, ...(data as Omit<Post, "id">) };
}

// ─── Read ─────────────────────────────────────────────────────────────────────

export async function fetchPosts(filters: PostFilters = {}): Promise<Post[]> {
  const constraints: QueryConstraint[] = [orderBy("publishedAt", "desc")];

  if (filters.status)    constraints.push(where("status", "==", filters.status));
  if (filters.tag)       constraints.push(where("tags", "array-contains", filters.tag));
  if (filters.topic)     constraints.push(where("topic", "==", filters.topic));
  if (filters.authorUid) constraints.push(where("author.uid", "==", filters.authorUid));
  if (filters.limit)     constraints.push(firestoreLimit(filters.limit));

  const snapshot = await getDocs(query(postsRef(), ...constraints));
  return snapshot.docs.map((d) => docToPost(d.id, d.data()));
}

export async function fetchPostById(id: string): Promise<Post | null> {
  const snapshot = await getDoc(postRef(id));
  if (!snapshot.exists()) return null;
  return docToPost(snapshot.id, snapshot.data());
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createPost(input: CreatePostInput): Promise<Post> {
  const now = serverTimestamp() as Timestamp;

  const payload = {
    ...input,
    readTimeMinutes: computeReadTime(input.body),
    viewCount: 0,
    likeCount: 0,
    bookmarkCount: 0,
    createdAt: now,
    updatedAt: now,
    publishedAt: input.status === "published" ? now : null,
  };

  const ref = await addDoc(postsRef(), payload);

  // Return a fully-typed Post immediately (Firestore timestamps resolve async)
  return {
    id: ref.id,
    ...payload,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    publishedAt: input.status === "published" ? Timestamp.now() : null,
  } as Post;
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updatePost({ id, ...fields }: UpdatePostInput): Promise<void> {
  const updates: Record<string, unknown> = {
    ...fields,
    updatedAt: serverTimestamp(),
  };

  // Recompute read time if body changed
  if (typeof fields.body === "string") {
    updates.readTimeMinutes = computeReadTime(fields.body);
  }

  // Stamp publishedAt the first time status flips to published
  if (fields.status === "published") {
    const current = await fetchPostById(id);
    if (current && current.status !== "published") {
      updates.publishedAt = serverTimestamp();
    }
  }

  await updateDoc(postRef(id), updates);
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export async function deletePost(id: string): Promise<void> {
  await deleteDoc(postRef(id));
}
