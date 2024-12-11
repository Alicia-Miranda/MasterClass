import { userController } from "../../controllers/userController.js";

const form = document.querySelector("#form-cadastro");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nomeCompleto = form.nomeCompleto.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const tipoUsuario = form.tipoUsuario.value;

  if (!tipoUsuario) {
    alert("Por favor, selecione um tipo de usuário.");
    return;
  }

  try {
    const response = await userController.cadastrarUsuario(email, password, nomeCompleto, tipoUsuario);
    alert(response.message);
    window.location.href = "./login.html"; // Redireciona para a página de login após o sucesso
  } catch (error) {
    alert(error.message);
  }
});
