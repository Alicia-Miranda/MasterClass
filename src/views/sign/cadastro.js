import { authController } from "../../controllers/authController.js"
import { validarDados } from '../../models/authModel.js';

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  authController.cadastrarUsuario(email, senha, nomeCompleto)
    .then(() => {
      formCadastro.reset();
      window.location.href = "./login.html";
    })
    .catch((error) => {
      alert("Erro ao realizar o cadastro: " + error.message);
    });
});
