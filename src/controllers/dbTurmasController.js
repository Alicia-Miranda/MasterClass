// implementando no banco de dados

async function carregarTurmas() {
    turmasContainer.innerHTML = ""; // Limpa o container
    const querySnapshot = await getDocs(collection(db, "turmas"));
  
    turmas = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Salva o ID do documento
      ...doc.data(), // Inclui os dados do documento
    }));
  
    renderizarTurmas();
}

async function removerTurma(id) {
    try {
      await deleteDoc(doc(db, "turmas", id));
      carregarTurmas(); // Atualiza a lista de turmas
    } catch (error) {
      console.error("Erro ao remover turma: ", error);
    }
  }
  
  // Adiciona eventos de remoção
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
  
      document.querySelectorAll(".btn-remover").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          removerTurma(id); // Chama a função para remover a turma
        });
      });
    }
}
  