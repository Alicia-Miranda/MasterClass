import { db } from "./firebase.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

export const firestoreModel = {
  setDocumento: async (collectionName, docId, data) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await setDoc(docRef, data);
      return { id: docId, ...data };
    } catch (error) {
      console.error(`Erro ao definir documento na coleção ${collectionName}:`, error);
      throw error;
    }
  },

  addDocumento: async (collectionName, data) => {
    try {
      const collectionRef = collection(db, collectionName);
      const docRef = await addDoc(collectionRef, data);
      return { id: docRef.id, ...data };
    } catch (error) {
      console.error(`Erro ao adicionar documento na coleção ${collectionName}:`, error);
      throw error;
    }
  },

  getDocumento: async (collectionName, docId) => {
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) return { id: docId, ...docSnapshot.data() };
      throw new Error("Documento não encontrado.");
    } catch (error) {
      console.error(`Erro ao buscar documento na coleção ${collectionName}:`, error);
      throw error;
    }
  },

  getColecao: async (collectionName) => {
    try {
      const collectionRef = collection(db, collectionName);
      const querySnapshot = await getDocs(collectionRef);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(`Erro ao buscar coleção ${collectionName}:`, error);
      throw error;
    }
  },

  deleteDocumento: async (collectionName, docId) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error(`Erro ao deletar documento na coleção ${collectionName}:`, error);
      throw error;
    }
  },

  updateDocumento: async (collectionName, docId, data) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, data);
    } catch (error) {
      console.error(`Erro ao atualizar documento na coleção ${collectionName}:`, error);
      throw error;
    }
  },
};
