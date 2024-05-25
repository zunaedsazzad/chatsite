import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7An2KufZDQqI6nr6iJ_8qU8M2VRDQSIU",
  authDomain: "chatsite-b1d64.firebaseapp.com",
  projectId: "chatsite-b1d64",
  storageBucket: "chatsite-b1d64.appspot.com",
  messagingSenderId: "712352505718",
  appId: "1:712352505718:web:c8eadf08e5f170338e2457",
  measurementId: "G-CMGM5T59N0"

  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);