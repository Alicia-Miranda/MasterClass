import { loginUsuario } from "../src/firebaseFuntions.js";

const login = document.getElementById('form-login');

login.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUsuario(email, password);
});

/* mostrar e esconder senha */
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    this.textContent = type === "password" ? "mostrar" : "esconder";
});