import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-vendor-4104d.firebaseapp.com",
  projectId: "ai-vendor-4104d",
  storageBucket: "ai-vendor-4104d.firebasestorage.app",
  messagingSenderId: "391109829346",
  appId: "1:391109829346:web:41d250707032268cd934bb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
