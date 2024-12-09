import { authController } from "../../controllers/authController.js"

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  authController.cadastrarUsuario(email, senha, nomeCompleto)
    .then(() => {
      alert("Cadastro realizado com sucesso!");
      formCadastro.reset(); // Limpa o formulário
    })
    .catch((error) => {
      alert("Erro ao realizar o cadastro: " + error.message);
    });
});
