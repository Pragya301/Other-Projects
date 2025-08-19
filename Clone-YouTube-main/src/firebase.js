
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDEh3hslv69Kx0BZyEl8vC4j3afSsnX-CI",
  authDomain: "clone-35d2e.firebaseapp.com",
  projectId: "clone-35d2e",
  storageBucket: "clone-35d2e.appspot.com",
  messagingSenderId: "997568297089",
  appId: "1:997568297089:web:18526da41e4c948c5d7580",
  measurementId: "G-1ZJHLHNC4R"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

