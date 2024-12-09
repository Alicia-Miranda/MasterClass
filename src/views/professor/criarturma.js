// script.js

// Seleciona os elementos do DOM
const openPopupButton = document.getElementById("open-popup");
const closePopupButton = document.getElementById("close-popup");
const confirmButton = document.getElementById("confirm-button");
const popup = document.getElementById("popup");

// Abre o popup
openPopupButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Fecha o popup ao clicar no botão de fechar
closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Também fecha o popup ao clicar no botão "Entendido"
confirmButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Fecha o popup ao clicar fora do conteúdo
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.add("hidden");
  }
});
