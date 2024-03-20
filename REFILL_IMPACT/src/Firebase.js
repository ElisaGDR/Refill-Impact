// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9vYNamJnbOpYlWPRRoJkxnlOijYWwZCI",
  authDomain: "refill-impact.firebaseapp.com",
  projectId: "refill-impact",
  storageBucket: "refill-impact.appspot.com",
  messagingSenderId: "456880082650",
  appId: "1:456880082650:web:76c43fbb722d89d5a55fe3",
  measurementId: "G-R15G3Z2N88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

export { app, analytics, database, firestore };