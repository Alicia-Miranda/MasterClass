import { authService } from "../../controllers/authService.js";
import { turmaHandlers } from "./js/turmaHandlers.js";
import { turmaService } from "./js/turmaService.js";
import { userController } from "../../controllers/userController.js";
import { professorController } from "../../controllers/professorController.js";

const popupOverlay = document.getElementById("popup-overlay");
const btnCriarTurma = document.querySelector(".btn-criar-turma");
const btnFecharPopup = document.getElementById("btn-fechar");
const formCriarTurma = document.getElementById("form-criar-turma");
const turmasContainer = document.getElementById("turmas-container");
const nomeProfessorElement = document.getElementById("nome-do-professor");
const semTurma = document.querySelector(".sem-turma");

document.addEventListener("DOMContentLoaded", () => {
  authService.onAuthStateChanged(async (user) => {
    if (user) {
      await turmaHandlers.carregarNomeProfessor(userController, nomeProfessorElement);
      await turmaService.carregarTurmas(user.uid, turmasContainer, semTurma);
    } else {
      console.error("Nenhum usuário autenticado.");
    }
  });

  turmaHandlers.criarTurma(formCriarTurma, professorController, turmasContainer, popupOverlay);

  btnCriarTurma.addEventListener("click", () => {
    popupOverlay.style.display = "block";
  });

  btnFecharPopup.addEventListener("click", () => {
    popupOverlay.style.display = "none";
  });
});
