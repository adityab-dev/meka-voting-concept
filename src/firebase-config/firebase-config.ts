// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU3pScYIg4ZGtcq_adrI1zSJia4QNpCqY",
  authDomain: "fir-demo-7a290.firebaseapp.com",
  projectId: "fir-demo-7a290",
  storageBucket: "fir-demo-7a290.appspot.com",
  messagingSenderId: "805902798662",
  appId: "1:805902798662:web:e47b4b118fcc6d3f5bdf47",
  measurementId: "G-VPTDT0NJ18",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);
