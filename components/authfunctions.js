import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';  
export async function logIn(email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  export async function signUp(email, password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  export async function logOut() {
    return await signOut(auth);
  }