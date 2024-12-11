import { firestoreModel } from "../models/firestoreModel.js";

export const professorController = {
  criarTurma: async (professorId, nomeTurma, nomeDisciplina) => {
    const turma = {
      nome: nomeTurma,
      disciplina: nomeDisciplina,
      professorId,
      criadoEm: new Date(),
    };

    try {
      return await firestoreModel.addDocumento("turmas", turma);
    } catch (error) {
      console.error("Erro ao criar turma:", error);
      throw new Error("Não foi possível criar a turma.");
    }
  },

  listarTurmas: async (professorId) => {
    try {
      const turmas = await firestoreModel.getColecao("turmas");
      return turmas.filter((turma) => turma.professorId === professorId);
    } catch (error) {
      console.error("Erro ao listar turmas:", error);
      throw new Error("Erro ao listar turmas.");
    }
  },

  atualizarTurma: async (turmaId, dadosAtualizados) => {
    try {
      return await firestoreModel.updateDocumento("turmas", turmaId, dadosAtualizados);
    } catch (error) {
      console.error("Erro ao atualizar turma:", error);
      throw new Error("Erro ao atualizar turma.");
    }
  },

  deletarTurma: async (turmaId) => {
    try {
      await firestoreModel.deleteDocumento("turmas", turmaId);
    } catch (error) {
      console.error("Erro ao deletar turma:", error);
      throw new Error("Erro ao deletar turma.");
    }
  },

  buscarNomeProfessor: async (uid) => {
    try {
      const usuario = await firestoreModel.getDocumento("usuarios", uid);
      if (usuario.tipoUsuario !== "professor") {
        throw new Error("Usuário não é um professor.");
      }
      return usuario.nome;
    } catch (error) {
      console.error("Erro ao buscar nome do professor:", error);
      throw new Error("Erro ao buscar nome do professor.");
    }
  },
};
