import { db } from "./firebase.js";
import { doc, setDoc, getDoc, getDocs, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

export const firestoreModel = {
    criarUsuario: async (uid, nomeCompleto, email, tipoUsuario) => {
        try {
          const userDocRef = doc(db, "usuarios", uid);
          await setDoc(userDocRef, {
            nome: nomeCompleto,
            email: email,
            tipoUsuario: tipoUsuario , // Adiciona o tipo de usuário
            criadoEm: new Date(),
          });
          console.log("Documento de usuário criado com sucesso.");
        } catch (error) {
          console.error("Erro ao criar documento de usuário:", error);
          throw new Error(error.message || "Erro ao criar documento no Firestore.");
        }
      },
      

  buscarUsuario: async (uid) => {
    try {
      const userDocRef = doc(db, "usuarios", uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        return userSnapshot.data();
      } else {
        throw new Error("Usuário não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw new Error(error.message || "Erro ao buscar documento no Firestore.");
    }
  },

  listarUsuarios: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      throw new Error(error.message || "Erro ao listar documentos no Firestore.");
    }
  },

  removerUsuario: async (uid) => {
    try {
      const userDocRef = doc(db, "usuarios", uid);
      await deleteDoc(userDocRef);
      console.log("Usuário removido com sucesso.");
    } catch (error) {
      console.error("Erro ao remover usuário:", error);
      throw new Error(error.message || "Erro ao remover documento no Firestore.");
    }
  },
};
