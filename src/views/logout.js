import { userController } from "../controllers/userController.js";

const handleLogout = async () => {
  try {
    await userController.logoutUsuario();
    window.location.href = "../../index.html";
  } catch (error) {
    console.error("Erro ao realizar logout:", error);
    alert("Erro ao deslogar. Por favor, tente novamente.");
  }
};

document.querySelector(".btn-sair").addEventListener("click", handleLogout);
