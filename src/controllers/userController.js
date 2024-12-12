import { firestoreModel } from "../models/firestoreModel.js";
import { authModel } from "../models/authModel.js";

export const userController = {
  cadastrarUsuario: async (email, password, nomeCompleto, tipoUsuario) => {
    try {
      const { user, message } = await authModel.cadastrar(email, password, nomeCompleto);
      await userController.criarUsuario(user.uid, nomeCompleto, email, tipoUsuario);
      return { message };
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      throw new Error(error.message || "Erro ao cadastrar usuário.");
    }
  },

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

  logoutUsuario: async () => {
    try {
      const result = await authModel.logout();
      console.log(result.message);
      return result;
    } catch (error) {
      console.error("Erro ao deslogar usuário:", error);
      throw new Error("Erro ao deslogar usuário. Tente novamente.");
    }
  },
};
