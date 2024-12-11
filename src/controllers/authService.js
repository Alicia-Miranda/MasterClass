import { auth } from "../models/firebase.js";

export const authService = {
  getCurrentUser: () => {
    return auth.currentUser;
  },

  onAuthStateChanged: (callback) => {
    auth.onAuthStateChanged(callback);
  },
};
