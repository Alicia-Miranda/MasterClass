import { firestoreModel } from "../models/firestoreModel.js";

export const userController = {
  criarUsuario: async (uid, nomeCompleto, email, tipoUsuario) => {
    const usuario = {
      nome: nomeCompleto,
      email,
      tipoUsuario,
      criadoEm: new Date(),
    };

    try {
      return await firestoreModel.setDocumento("usuarios", uid, usuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw new Error("Erro ao criar usuário.");
    }
  },

  buscarUsuario: async (uid) => {
    try {
      return await firestoreModel.getDocumento("usuarios", uid);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw new Error("Erro ao buscar usuário.");
    }
  },
};
