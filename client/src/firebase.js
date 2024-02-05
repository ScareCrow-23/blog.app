// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-23dd9.firebaseapp.com",
  projectId: "mern-blog-23dd9",
  storageBucket: "mern-blog-23dd9.appspot.com",
  messagingSenderId: "693196583113",
  appId: "1:693196583113:web:3a92e9d281e2b0f9d25d18",
  measurementId: "G-H8BHQJ6KJ4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
