import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MSG_SENDING_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUwPjZx41edzfJo8t9Lc8FcFuGFKFmBaY",
//   authDomain: "my-project-69bbc.firebaseapp.com",
//   projectId: "my-project-69bbc",
//   storageBucket: "my-project-69bbc.appspot.com",
//   messagingSenderId: "454235136565",
//   appId: "1:454235136565:web:f1b4ac006495ee98a5877c"
// };


