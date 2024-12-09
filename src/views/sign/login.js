import { authController } from '../../controllers/authController.js';

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("form-login");

  if (!loginForm) {
    console.error("Formulário de login não encontrado!");
    return;
  }

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput || !passwordInput) {
      console.error("Campos de e-mail ou senha não encontrados!");
      return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await authController.loginUsuario(email, password);
      alert("Login realizado com sucesso!");
    } catch (error) {
      alert(`Erro ao realizar login: ${error.message}`);
    }
  });
});

const togglePassword = document.getElementById("mostrar-senha");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";

  this.textContent = isPasswordVisible ? "Mostrar" : "Esconder";
});
