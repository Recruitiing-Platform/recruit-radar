import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUk3QnKDvau4ri2FwSB5r_HgLg44y4yHY",
  authDomain: "recruitradar-3f20b.firebaseapp.com",
  projectId: "recruitradar-3f20b",
  storageBucket: "recruitradar-3f20b.appspot.com",
  messagingSenderId: "751691142936",
  appId: "1:751691142936:web:de495921958f265b7bf06d",
  measurementId: "G-Q8PL5PQVBY",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
