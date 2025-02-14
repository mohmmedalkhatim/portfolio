// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from "firebase/app";
import dotenv from "dotenv"
let env = dotenv.parse("/.env")

const firebaseConfig: FirebaseOptions = {
  apiKey: env.VITE_FIREBASE_API_KEY as string,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN as string,
  projectId: env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
  appId: env.VITE_FIREBASE_APP_ID as string
};

export const app = initializeApp(firebaseConfig);
