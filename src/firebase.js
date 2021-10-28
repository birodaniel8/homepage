import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD-oMjTyw9lgJ92dCHiI053QacnUg2sqnA",
  authDomain: "homepage-521ea.firebaseapp.com",
  projectId: "homepage-521ea",
  storageBucket: "homepage-521ea.appspot.com",
  messagingSenderId: "104639828817",
  appId: "1:104639828817:web:897f851dc9586d5ee23970",
};

let app;

// Initialize app if not already initialized:
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// The database and authentication components are used:
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
