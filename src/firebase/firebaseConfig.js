import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3c2UNSsDHSPXvNpLDQGLu-Sb3mRVd2FU",
  authDomain: "osidistech-ecommerce.firebaseapp.com",
  projectId: "osidistech-ecommerce",
  storageBucket: "osidistech-ecommerce.firebasestorage.app",
  messagingSenderId: "1000708916431",
  appId: "1:1000708916431:web:9d869e2526201df3b3a3ba",
  measurementId: "G-9HVMVGQMMF",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
