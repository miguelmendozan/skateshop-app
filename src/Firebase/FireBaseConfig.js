
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5_OU3kAwqb98eHaGoodkBHzj0BD7wD2U",
  authDomain: "skateshop-app-d3d3a.firebaseapp.com",
  projectId: "skateshop-app-d3d3a",
  storageBucket: "skateshop-app-d3d3a.appspot.com",
  messagingSenderId: "202267089194",
  appId: "1:202267089194:web:d215e6866b962cc9f6a653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);