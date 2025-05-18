
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfDeyxcN050c4Y0WF1Bm7wDlKilD1tfQ0",
  authDomain: "madassigmentnabihanasir.firebaseapp.com",
  projectId: "madassigmentnabihanasir",
  storageBucket: "madassigmentnabihanasir.appspot.com",
  messagingSenderId: "231717965591",
  appId: "1:231717965591:android:1ff9d0078cbee0d8db7152",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


