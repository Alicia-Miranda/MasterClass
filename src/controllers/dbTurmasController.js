import { getDocs, collection, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { db } from "../../../firebaseConfig.js";

const turmasContainer = document.getElementById("turmas-container");
let turmas = [];

// Função para carregar turmas do Firestore
export async function carregarTurmas() {
  turmasContainer.innerHTML = ""; // Limpa o container

  try {
    const querySnapshot = await getDocs(collection(db, "turmas"));
    turmas = querySnapshot.docs.map((doc) => ({
      id: doc.id, // ID do documento
      ...doc.data(), // Dados do documento
    }));

    renderizarTurmas();
  } catch (error) {
    console.error("Erro ao carregar turmas:", error);
    turmasContainer.innerHTML = "<p>Erro ao carregar turmas.</p>";
  }
}

// Função para remover uma turma
export async function removerTurma(id) {
  try {
    await deleteDoc(doc(db, "turmas", id));
    alert("Turma removida com sucesso!");
    carregarTurmas(); // Atualiza a lista de turmas
  } catch (error) {
    console.error("Erro ao remover turma:", error);
    alert("Erro ao remover turma. Tente novamente.");
  }
}

// Função para renderizar as turmas no DOM
function renderizarTurmas() {
  turmasContainer.innerHTML = ""; // Limpa o container

  if (turmas.length === 0) {
    document.querySelector(".sem-turma").style.display = "block";
  } else {
    document.querySelector(".sem-turma").style.display = "none";

    turmas.forEach((turma) => {
      const turmaCard = document.createElement("div");
      turmaCard.classList.add("turma-card");

      turmaCard.innerHTML = `
        <h3>${turma.nome}</h3>
        <p>Disciplina: ${turma.disciplina}</p>
        <button class="btn-remover" data-id="${turma.id}">Remover</button>
      `;

      turmasContainer.appendChild(turmaCard);
    });

    // Adiciona eventos de remoção aos botões
    document.querySelectorAll(".btn-remover").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        removerTurma(id);
      });
    });
  }
}
