// não ta pronto ta errado etc

document.getElementById("search-btn").addEventListener("click", () => {
    const searchValue = document.getElementById("search-input").value.trim();
  
    if (searchValue) {
      alert(`Buscando por: ${searchValue}`);
      // Aqui você pode adicionar a lógica de busca no backend ou filtro na interface.
    } else {
      alert("Por favor, insira um termo para busca.");
    }
  });
  