import { auth } from '../src/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

export function cadastrarUsuario(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('usuario cadastrado com sucesso:', userCredential.user);
        })
        .catch(error => {
            console.error('erro ao cadastrar:', error.message);
        });
}

export function loginUsuario(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('usuário logado:', userCredential.user);
        })
        .catch(error => {
            console.error('erro ao fazer login:', error.message);
        })
}

export function logoutUser() {
    return signOut(auth)
      .then(() => {
        console.log('Usuário deslogado');
      })
      .catch(error => {
        console.error('Erro ao deslogar:', error.message);
      });
}
