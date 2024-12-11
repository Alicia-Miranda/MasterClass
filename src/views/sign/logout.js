import { userController } from "../../controllers/userController.js";

const logoutButton = document.querySelector(".btn-sair");

logoutButton.addEventListener("click", async () => {
  try {
    await userController.logoutUsuario();
    alert("Você foi desconectado com sucesso.");
    window.location.href = "../../index.html";
  } catch (error) {
    alert("Erro ao sair. Tente novamente.");
  }
});
