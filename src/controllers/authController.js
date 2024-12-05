import { authModel } from "../models/authModel.js";

export const authController = {
  cadastrarUsuario: (email, password) => { // add nome completo
    authModel.cadastrar(email, password)
      .then(userCredential => {
        console.log("Usuário cadastrado com sucesso:", userCredential.user);
      })
      .catch(error => {
        console.error("Erro ao cadastrar:", error.message, error.code);
      });
  },

  loginUsuario: (email, password) => {
    authModel.login(email, password)
      .then(userCredential => {
        console.log("Usuário logado com sucesso:", userCredential.user);
      })
      .catch(error => {
        console.error("Erro ao logar:", error.message, error.code);
      });
  },

  logoutUsuario: () => {
    authModel.logout()
      .then(() => {
        console.log("Usuário deslogado");
      })
      .catch(error => {
        console.error("Erro ao deslogar:", error.message, error.code);
      });
  },
};