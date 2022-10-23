// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzIR1WYyP2RtrTxgLtSzH9gbhD1iko6uo",
  authDomain: "dragon-news-bc12c.firebaseapp.com",
  projectId: "dragon-news-bc12c",
  storageBucket: "dragon-news-bc12c.appspot.com",
  messagingSenderId: "278369375816",
  appId: "1:278369375816:web:700d6398a82fd309752a7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;