import { userController } from "../../controllers/userController.js";

const form = document.querySelector("#form-cadastro");

function mostrarNotificacao(mensagem, tipo = "sucesso") {
  const notificacao = document.getElementById("notificacao");

  notificacao.textContent = mensagem;
  notificacao.className = `notificacao ${tipo === "erro" ? "erro" : ""}`;

  notificacao.style.display = "block";

  setTimeout(() => {
    notificacao.style.display = "none";
  }, 4000);
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nomeCompleto = form.nomeCompleto.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const tipoUsuario = form.tipoUsuario.value;

  if (!tipoUsuario) {
    mostrarNotificacao("Por favor, selecione um tipo de usuário.", "erro");
    return;
  }

  try {
    const response = await userController.cadastrarUsuario(email, password, nomeCompleto, tipoUsuario);
    mostrarNotificacao(response.message); // Exibe a notificação de sucesso
    setTimeout(() => {
      window.location.href = "./login.html"; // Redireciona após 4 segundos
    }, 4000);
  } catch (error) {
    mostrarNotificacao(error.message, "erro"); // Exibe a notificação de erro
  }
});
