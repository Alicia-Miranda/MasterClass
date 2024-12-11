import { authService } from "../../../controllers/authService.js";
import { domUtils } from "./domUtils.js";

export const turmaHandlers = {
  carregarNomeProfessor: async (userController, nomeProfessorElement) => {
    try {
      const professor = authService.getCurrentUser();
      if (!professor) throw new Error("Usuário não está autenticado.");

      const usuario = await userController.buscarUsuario(professor.uid);
      nomeProfessorElement.textContent = usuario.nome;
    } catch (error) {
      console.error("Erro ao carregar nome do professor:", error);
      nomeProfessorElement.textContent = "Professor não identificado";
    }
  },

  criarTurma: async (formElement, professorController, container, overlay) => {
    formElement.addEventListener("submit", async (event) => {
      event.preventDefault();

      const nomeTurma = document.getElementById("nome-turma").value;
      const nomeDisciplina = document.getElementById("nome-disciplina").value;

      try {
        const professor = authService.getCurrentUser();
        if (!professor) throw new Error("Usuário não está autenticado.");

        const novaTurma = await professorController.criarTurma(
          professor.uid,
          nomeTurma,
          nomeDisciplina
        );

        domUtils.showMessage("Turma criada com sucesso!");
        turmaRenderer.renderTurma(novaTurma, container);

        formElement.reset();
        overlay.style.display = "none";
      } catch (error) {
        console.error("Erro ao criar turma:", error);
        domUtils.showMessage(`Erro ao criar turma: ${error.message}`, "error");
      }
    });
  },
};
