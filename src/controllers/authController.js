import { authModel } from "../models/authModel.js";

export const authController = {
  cadastrarUsuario: async (email, password, nomeCompleto) => {
    try {
      const { user, message } = await authModel.cadastrar(email, password, nomeCompleto);
      console.log(message, user);
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
    }
  },
  

  loginUsuario: async (email, password) => {
    try {
      const { user, message } = await authModel.login(email, password);
      console.log(message, user);
    } catch (error) {
      console.error("Erro ao logar:", error.message);
    }
  },

  logoutUsuario: async () => {
    try {
      const { message } = await authModel.logout();
      console.log(message);
    } catch (error) {
      console.error("Erro ao deslogar:", error.message);
    }
  }
};
