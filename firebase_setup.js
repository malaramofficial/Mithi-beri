
// Import Firebase functions in your project
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYQAK-c5-EBGDN2fuBiAWK17HnqSg058E",
  authDomain: "voting-app-f5d8b.firebaseapp.com",
  databaseURL: "https://voting-app-f5d8b-default-rtdb.firebaseio.com",
  projectId: "voting-app-f5d8b",
  storageBucket: "voting-app-f5d8b.appspot.com",
  messagingSenderId: "572075489115",
  appId: "1:572075489115:web:30e506ae04806e8a128c7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Write data to Realtime Database
set(ref(database, 'votes/'), {
  candidate1: 0,
  candidate2: 0
});
