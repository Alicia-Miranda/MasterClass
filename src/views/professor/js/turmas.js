import { professorController } from "../../../controllers/professorController.js";
import { userController } from "../../../controllers/userController.js";
import { auth } from "../../../models/firebase.js";

const popupOverlay = document.getElementById("popup-overlay");
const btnCriarTurma = document.querySelector(".btn-criar-turma");
const btnFecharPopup = document.getElementById("btn-fechar");
const formCriarTurma = document.getElementById("form-criar-turma");
const turmasContainer = document.getElementById("turmas-container");
const nomeProfessorElement = document.getElementById("nome-do-professor");
const semTurma = document.querySelector(".sem-turma");

// Exibe o nome do professor
const carregarNomeProfessor = async () => {
  try {
    const professor = auth.currentUser;

    if (!professor) {
      throw new Error("Usuário não está autenticado.");
    }

    const usuario = await userController.buscarUsuario(professor.uid);
    const nomeProfessor = usuario.nome; // Acessa o campo 'nome' do documento
    nomeProfessorElement.textContent = nomeProfessor;
  } catch (error) {
    console.error("Erro ao carregar nome do professor:", error);
    nomeProfessorElement.textContent = "Professor não identificado";
  }
};

// Renderiza uma turma no container
const renderTurma = (turma) => {
  const turmaDiv = document.createElement("div");
  turmaDiv.classList.add("turma-card");

  turmaDiv.innerHTML = `
    <h3>${turma.nome}</h3>
    <p>Disciplina: ${turma.disciplina}</p>
    <button class="btn-excluir-turma" data-id="${turma.id}">Excluir</button>
  `;

  turmasContainer.appendChild(turmaDiv);

  const btnExcluir = turmaDiv.querySelector(".btn-excluir-turma");
  btnExcluir.addEventListener("click", async () => {
    try {
      await professorController.deletarTurma(turma.id);
      turmaDiv.remove();
      alert("Turma excluída com sucesso.");
    } catch (error) {
      console.error("Erro ao excluir turma:", error);
      alert(`Erro ao excluir turma: ${error.message}`);
    }
  });
};

// Carrega e exibe as turmas do professor
const carregarTurmas = async () => {
  turmasContainer.innerHTML = ""; // Limpa o container
  try {
    const professor = auth.currentUser;
    if (!professor) {
      throw new Error("Usuário não está autenticado.");
    }

    const turmas = await professorController.listarTurmas(professor.uid);

    if (turmas.length === 0) {
      semTurma.style.display = "block";
      turmasContainer.style.display = "none";
    } else {
      semTurma.style.display = "none";
      turmasContainer.style.display = "grid";
      turmas.forEach((turma) => renderTurma(turma));
    }
  } catch (error) {
    console.error("Erro ao carregar turmas:", error);
    alert(`Erro ao carregar turmas: ${error.message}`);
  }
};

// Criação de uma nova turma
formCriarTurma.addEventListener("submit", async (event) => {
  event.preventDefault();

  const nomeTurma = document.getElementById("nome-turma").value;
  const nomeDisciplina = document.getElementById("nome-disciplina").value;

  try {
    const professor = auth.currentUser;
    if (!professor) {
      throw new Error("Usuário não está autenticado.");
    }

    const novaTurma = await professorController.criarTurma(
      professor.uid,
      nomeTurma,
      nomeDisciplina
    );

    alert("Turma criada com sucesso!");
    renderTurma(novaTurma);

    formCriarTurma.reset();
    popupOverlay.style.display = "none";
  } catch (error) {
    console.error("Erro ao criar turma:", error);
    alert(`Erro ao criar turma: ${error.message}`);
  }
});

// Abertura e fechamento do popup de criação de turma
btnCriarTurma.addEventListener("click", () => {
  popupOverlay.style.display = "block";
});

btnFecharPopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Inicializa a página
document.addEventListener("DOMContentLoaded", () => {
  // Aguarda a mudança no estado de autenticação antes de carregar as turmas
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      await carregarNomeProfessor();
      await carregarTurmas();
    } else {
      console.error("Erro: Nenhum usuário autenticado.");
      alert("Você precisa estar logado para acessar esta página.");
      window.location.href = "/src/views/login.html"; // Redireciona para login se não estiver autenticado
    }
  });
});
