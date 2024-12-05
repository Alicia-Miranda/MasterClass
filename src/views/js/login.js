import { authController } from '../../controllers/authController.js';

const loginForm = document.getElementById("form-login");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  
  authController.loginUsuario(email, password);
});


const togglePassword = document.getElementById("mostrar-senha");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";

  this.textContent = isPasswordVisible ? "Mostrar" : "Esconder";
});
