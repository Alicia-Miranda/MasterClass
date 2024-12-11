 import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

export const validarDados = (email, password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) throw new Error("E-mail inválido.");
  if (password.length < 6) throw new Error("A senha deve ter pelo menos 6 caracteres.");
};

export const authModel = {
  cadastrar: async (email, password, nomeCompleto) => {
    try {
      validarDados(email, password); // Validação dos dados

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Atualiza o perfil do usuário com o nome completo
      await updateProfile(user, { displayName: nomeCompleto });

      return { user, message: "Usuário cadastrado com sucesso." };
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      throw new Error(error.message || "Erro ao cadastrar usuário. Tente novamente.");
    }
  },

  login: async (email, password) => {
    try {
      validarDados(email, password);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { user: userCredential.user, message: "Login realizado com sucesso." };
    } catch (error) {
      console.error("Erro ao logar:", error);
      throw new Error(error.message || "Erro ao logar. Verifique suas credenciais.");
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      return { message: "Usuário deslogado com sucesso." };
    } catch (error) {
      console.error("Erro ao deslogar:", error);
      throw new Error(error.message || "Erro ao deslogar. Tente novamente.");
    }
  },
};
