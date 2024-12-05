import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

export const authModel = {
  cadastrar: (email, password) =>
    createUserWithEmailAndPassword(auth, email, password),
    
  login: (email, password) =>
    signInWithEmailAndPassword(auth, email, password),

  logout: () => signOut(auth),
};