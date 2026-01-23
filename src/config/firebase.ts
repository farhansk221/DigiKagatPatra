import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Centralized auth service for login/signup using Firebase Authentication
export const AuthService = {
  // Login with Email and Password
  loginWithEmail: async (
    email: string,
    password: string
  ): Promise<string> => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userData);
      return userData.user.uid;
    } catch (error) {
      console.error("Error logging in with email:", error);
      throw error;
    }
  },

  // Signup with Email and Password
  signupWithEmail: async (
    email: string,
    password: string
  ): Promise<string> => {
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userData);
      return userData.user.uid;
    } catch (error) {
      console.error("Error signing up with email:", error);
      throw error;
    }
  },
};

export default app;
