import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGG17U4TT7ZtN69rtQXfdWJxgIxVdL2O8",
  authDomain: "hey-app-1692b.firebaseapp.com",
  databaseURL: "https://hey-app-1692b-default-rtdb.firebaseio.com",
  projectId: "hey-app-1692b",
  storageBucket: "hey-app-1692b.appspot.com",
  messagingSenderId: "692525574127",
  appId: "1:692525574127:web:f89bcd1b5a62f60794f81a",
};

const app = initializeApp(firebaseConfig);

// for database part
const db = getFirestore(app);

// for authentication part
const auth = getAuth(app);

// google authentication
// Method-1: using pop-window -> signInWithPopup(auth, provider).then().catch()
// Method-2: using redirect-window -> signInWithRedirect(auth, provider).then().catch()
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
