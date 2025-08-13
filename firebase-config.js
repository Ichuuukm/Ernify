// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";

// Your Firebase configuration (replace with yours from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDhlzQwGKNoMCNc3fXOqoD5zRaRXddB4Jo",
  authDomain: "ernify-6be43.firebaseapp.com",
  projectId: "ernify-6be43",
  storageBucket: "ernify-6be43.firebasestorage.app",
  messagingSenderId: "618344377810",
  appId: "1:618344377810:web:f0af154300f8b89210ec0b",
  measurementId: "G-GBRJ6WVEQD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
