import { cadastrarUsuario } from "../src/firebaseFuntions.js";

const cadastro = document.getElementById('form-cadastro');

cadastro.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    cadastrarUsuario(email, password);
});