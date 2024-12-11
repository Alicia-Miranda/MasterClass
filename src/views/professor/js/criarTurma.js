import { carregarTurmas } from "../../../controllers/dbTurmasController" 

const popupOverlay = document.getElementById("popup-overlay");
const btnCriarTurma = document.querySelector(".btn-criar-turma");
const btnFechar = document.getElementById("btn-fechar");
const formCriarTurma = document.getElementById("form-criar-turma");

btnCriarTurma.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

btnFechar.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});


formCriarTurma.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nomeTurma = document.getElementById("nome-turma").value.trim();
  const nomeDisciplina = document.getElementById("nome-disciplina").value.trim();

  if (nomeTurma && nomeDisciplina) {
    try {
      await addDoc(collection(db, "turmas"), {
        nome: nomeTurma,
        disciplina: nomeDisciplina,
      });

      popupOverlay.style.display = "none"; // Fecha o popup
      formCriarTurma.reset(); // Limpa o formulário
      carregarTurmas(); // Atualiza a lista de turmas
    } catch (error) {
      console.error("Erro ao adicionar turma: ", error);
    }
  }
});