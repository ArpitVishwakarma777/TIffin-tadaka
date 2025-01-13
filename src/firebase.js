import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQqGQ_FMuuJZwlEOU0-LZztXbplKRS57c",
  authDomain: "tiffin-tadaka.firebaseapp.com",
  projectId: "tiffin-tadaka",
  storageBucket: "tiffin-tadaka.firebasestorage.app",
  messagingSenderId: "199073366498",
  appId: "1:199073366498:web:a83843e1edde6044e979bb",
  databaseURL: "https://tiffin-tadaka-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
