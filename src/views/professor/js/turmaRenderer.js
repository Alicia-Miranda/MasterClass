import { professorController } from "../../../controllers/professorController.js";
import { domUtils } from "./domUtils.js";

export const turmaRenderer = {
  renderTurma: (turma, container) => {
    const turmaDiv = document.createElement("div");
    turmaDiv.classList.add("turma-card");

    turmaDiv.innerHTML = `
      <h3>${turma.nome}</h3>
      <p>Disciplina: ${turma.disciplina}</p>
      <button class="btn-excluir-turma" data-id="${turma.id}">Excluir</button>
    `;

    container.appendChild(turmaDiv);

    const btnExcluir = turmaDiv.querySelector(".btn-excluir-turma");
    btnExcluir.addEventListener("click", async () => {
      try {
        await professorController.deletarTurma(turma.id);
        turmaDiv.remove();
        domUtils.showMessage("Turma excluída com sucesso.");
      } catch (error) {
        console.error("Erro ao excluir turma:", error);
        domUtils.showMessage(`Erro ao excluir turma: ${error.message}`, "error");
      }
    });
  },
};
     