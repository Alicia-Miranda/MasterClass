import { loginUsuario } from "../src/firebaseFuntions.js";

const login = document.getElementById('form-login');

login.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUsuario(email, password);
});