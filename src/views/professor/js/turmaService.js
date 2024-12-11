import { professorController } from "../../../controllers/professorController.js";
import { turmaRenderer } from "./turmaRenderer.js";
import { domUtils } from "./domUtils.js";

export const turmaService = {
  carregarTurmas: async (professorId, container, semTurmaElement) => {
    domUtils.clearContainer(container);

    try {
      const turmas = await professorController.listarTurmas(professorId);
      if (turmas.length === 0) {
        domUtils.toggleElementDisplay(semTurmaElement, "block");
        domUtils.toggleElementDisplay(container, "none");
      } else {
        domUtils.toggleElementDisplay(semTurmaElement, "none");
        domUtils.toggleElementDisplay(container, "grid");
        turmas.forEach((turma) => turmaRenderer.renderTurma(turma, container));
      }
    } catch (error) {
      console.error("Erro ao carregar turmas:", error);
      domUtils.showMessage(`Erro ao carregar turmas: ${error.message}`, "error");
    }
  },
};
