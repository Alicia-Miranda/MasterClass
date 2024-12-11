import { authModel } from "../../models/authModel.js";
import { firestoreModel } from "../../models/firestoreModel.js";

// Lidar com o botão de mostrar/esconder senha
const btnMostrarSenha = document.getElementById("mostrar-senha");
const inputPassword = document.getElementById("password");

btnMostrarSenha.addEventListener("click", () => {
  const tipo = inputPassword.type === "password" ? "text" : "password";
  inputPassword.type = tipo;
  btnMostrarSenha.textContent = tipo === "password" ? "Mostrar" : "Esconder";
});

// Captura o formulário
const form = document.getElementById("form-login");

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
  event.preventDefault(); // Evita o recarregamento da página

  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (!email || !password) {
    mostrarNotificacao("Por favor, preencha todos os campos.", "erro");
    return;
  }

  try {
    // Realiza login com o Firebase Authentication
    const { user } = await authModel.login(email, password);

    // Busca o tipo de usuário no Firestore
    const usuarioFirestore = await firestoreModel.buscarUsuario(user.uid);
    const tipoUsuario = usuarioFirestore.tipoUsuario;

    if (!tipoUsuario) {
      mostrarNotificacao("Tipo de usuário não identificado.", "erro");
      return;
    }

    // Redireciona com base no tipo de usuário
    if (tipoUsuario === "professor") {
      window.location.href = "/src/views/professor/turma.html";
    } else if (tipoUsuario === "aluno") {
      window.location.href = "../aluno/dashboard.html";
    } else {
      mostrarNotificacao("Tipo de usuário inválido.", "erro");
    }
  } catch (error) {
    mostrarNotificacao(error.message || "Erro ao realizar login.", "erro");
    console.error("Erro no login:", error);
  }
});
