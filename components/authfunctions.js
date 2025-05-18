// components/authfunctions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from '../firebase';


// Sign Up and save userType to Firestore
export async function signUp(email, password, userType) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save role in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email,
    userType,
    createdAt: new Date()
  });

  return user;
}

// Log in and return userType
export async function logIn(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Fetch userType
  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (userDoc.exists()) {
    const { userType } = userDoc.data();
    return { user, userType };
  } else {
    throw new Error("User profile not found.");
  }
}

export async function logOut() {
  return await signOut(auth);
}
