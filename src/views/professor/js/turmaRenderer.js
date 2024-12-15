import { professorController } from "../../../controllers/professorController.js";
import { domUtils } from "./domUtils.js";

export const turmaRenderer = {
  renderTurma: (turma, container) => {
    const turmaDiv = document.createElement("div");
    turmaDiv.classList.add("turma-card");

    turmaDiv.innerHTML = `
    <div class="turma-content">
      <div class="turma-info">
      <h3 class="turma-nome">${turma.nome}</h3>
      <p class="turma-detalhe">Turma: ${turma.disciplina}</p>
    </div>
      <div class="turma-icone">
        <i class="folder-icon">📁</i>
      </div>
    </div>
    <a class="ver-tudo-btn" href="../professor/sala.html">Ver tudo</a>
    <button class="btn-excluir-turma">Excluir</button> <!-- Adicionado aqui -->
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
     