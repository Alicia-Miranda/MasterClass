import { authModel } from "../models/authModel.js";
import { firestoreModel } from "../models/firestoreModel.js";

export const userController = {
  cadastrarUsuario: async (email, password, nomeCompleto, tipoUsuario) => {
    try {
      const { user } = await authModel.cadastrar(email, password, nomeCompleto);
      await firestoreModel.criarUsuario(user.uid, nomeCompleto, email, tipoUsuario); 
      return { message: "Usuário cadastrado e salvo com sucesso." };
    } catch (error) {
      console.error("Erro no cadastro de usuário:", error);
      throw new Error(error.message || "Erro no cadastro de usuário.");
    }
  },
};
