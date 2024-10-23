function Login() {
    var done = 0;
    var usuario = document.getElementsById('email')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsById('senha')[0].value;
    seha = senha.toLowerCase();
  
    if (usuario == "bcf" && senha == "bcf") {
      window.location = "index.html";
      done = 1;
    }
    if (done == 0) {
      alert("Dados incorretos, tente novamente");
  
    }
  }