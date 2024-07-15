import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, applyActionCode } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBUk3QnKDvau4ri2FwSB5r_HgLg44y4yHY",
  authDomain: "recruitradar-3f20b.firebaseapp.com",
  projectId: "recruitradar-3f20b",
  storageBucket: "recruitradar-3f20b.appspot.com",
  messagingSenderId: "751691142936",
  appId: "1:751691142936:web:32d53dce504c44ad7bf06d",
  measurementId: "G-H0M89YNE6J"
};

/** @type {import("firebase/app").FirebaseApp} */
let app;
/** @type {import("firebase/analytics").Analytics} */
let analytics;
/** @type {import("firebase/auth").Auth} */
let auth;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
}

export { app, analytics, auth, createUserWithEmailAndPassword, sendEmailVerification, applyActionCode };
