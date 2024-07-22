# Mapeamento de Requisitos e Funcionalidades
## Funcionalidades para Professores
### Criação e Edição de Conteúdos:
- Permitir a criação de conteúdos de texto, vídeo e quizzes.
- Salvar automaticamente os conteúdos a cada 30 segundos ou quando há mudanças significativas.
- Oferecer opções de formatação (negrito, itálico, sublinhado, listas, etc.).
- Personalização de quizzes (adicionar opções, definir respostas corretas, etc.).
  
### Compartilhamento de Conteúdos de Terceiros:
- Adicionar links, documentos e vídeos externos.
- Adicionar comentários ou notas explicativas aos conteúdos compartilhados.
- Permitir que os destinatários acessem e visualizem os conteúdos de terceiros com os comentários do usuário.

### Acompanhamento do Progresso dos Alunos:
- Visualização de relatórios detalhados de cada aluno, incluindo desempenho, tempo gasto em atividades e áreas de dificuldade.
- Filtragem dos relatórios por aluno, turma ou conteúdo específico.
- Adicionar comentários aos relatórios de progresso dos alunos.
- Notificar os alunos quando novos comentários são adicionados aos seus relatórios.

## Funcionalidades para Alunos
### Acompanhamento do Próprio Progresso:
- Visualização do progresso em todas as matérias e atividades, incluindo estatísticas de desempenho e áreas que precisam de atenção.
- Painel de controle com resumo do desempenho.
- Receber alertas ou lembretes de atividades pendentes ou áreas de baixo desempenho.

### Notificações de Novos Conteúdos:
- Receber notificações automáticas quando novos conteúdos são adicionados.
- Configuração das notificações para serem enviadas por e-mail e/ou dentro da própria plataforma.
- Ajustar preferências de notificação (frequência, tipos de conteúdo).

### Acesso a Métodos de Ensino Diversificados:
- Acessar conteúdos variados, incluindo vídeos, quizzes e apresentações.
- Biblioteca de recursos diversificados categorizados por matéria e nível de dificuldade.
- Conteúdos facilmente acessíveis e navegáveis.

### Avaliação de Conteúdos:
- Avaliar conteúdos com uma classificação por estrelas ou outra métrica.
- Adicionar comentários anônimos aos conteúdos avaliados.
- Avaliações e comentários visíveis para os professores e coordenadores.

## Funcionalidades para Coordenadores
### Relatórios de Desempenho dos Professores:
- Geração de relatórios periódicos sobre o desempenho dos professores, incluindo feedback dos alunos, progresso dos alunos e engajamento com a plataforma.
- Relatórios personalizáveis e exportáveis em diferentes formatos (PDF, Excel).
- Comparação do desempenho entre diferentes professores ou turmas.


Para a próxima etapa do relatório serão mostradas partes específicas do protótipo e faremos uma relação entre o frame e qual requisito a tela está atendendo, com explicação detalhada da funcionalidade.

São definidos três tipos de usuário no aplicativo: Aluno, professor e Coordenador.

--------
 
**História do usuário 1** - “Como professora, eu quero uma plataforma onde eu possa criar conteúdos, para compartilhá-los com meus alunos.”
Nesta tela é onde se encontram as funcionalidades de criar os conteúdos.
**Critérios de Aceitação**
- O professor(a) pode criar, editar e salvar automaticamente conteúdos de texto, vídeo e quizzes.
- O sistema salvará cada mudança automaticamente.
- O professor(a) pode formatar textos (negrito, itálico, sublinhado, listas, etc.) e personalizar quizzes (adicionar opções, definir respostas corretas, etc.).
- O conteúdo é acessível e editável após a criação.

--------

**História do Usuário 2**- “Como professora, eu quero poder compartilhar conteúdos além dos meus, para ampliar o horizonte de conhecimento dos meus alunos.”
Nesta tela é onde se encontram as funcionalidades de compartilhar conteúdos externos.
**Critérios de Aceitação**
- O usuário pode adicionar links, documentos e vídeos externos à plataforma.
- O usuário pode adicionar comentários ou notas explicativas aos conteúdos compartilhados.
- Os destinatários conseguem acessar e visualizar os conteúdos de terceiros com os comentários do usuário.

--------

**História do Usuário 3**- “Como professora, quero que as principais funcionalidades do sistema se encontrem na página principal”.
As funcionalidades principais para professores estão localizadas na página inicial.
**Critérios de Aceitação**
- A interface inicial deve exibir as funcionalidades principais do sistema (adicionar conteúdo, criar sala de aula, acessar uma sala de aula).
- Realizar tarefas comuns, como criar e salvar conteúdos ou acessar relatórios de progresso, leva no máximo 3 cliques.
- Feedback positivo de usabilidade de pelo menos 80% dos usuários durante o teste de aceitação.

--------

**História do Usuário 4** - “Como professora, eu quero poder acompanhar o progresso individual dos meus alunos, para identificar a principal dificuldade de cada um.”
Nesta tela é onde se encontram as funcionalidades para acompanhar o progresso individual dos alunos.
**Critérios de Aceitação**
- O professor(a) pode visualizar relatórios detalhados de cada aluno, incluindo desempenho, tempo gasto em atividades e áreas de dificuldade.
- O relatório permite filtragem por aluno, turma ou conteúdo específico.
- O professor(a) pode adicionar comentários aos relatórios de progresso dos alunos.
- Os alunos recebem notificações quando novos comentários são adicionados aos seus relatórios.
 
--------

**História do Usuário 5** - “Como professora, eu quero poder comentar o progresso dos meus alunos, para incentivá-los ou alertá-los sobre algo.”
- Navegabilidade da função de comentário do professor para o aluno.

--------

**História do Usuário 6** - “Como aluno, eu quero poder acompanhar meu próprio progresso, para que eu possa dar atenção a todas as matérias.”
**Critérios de Aceitação**
- O aluno pode visualizar seu progresso em todas as matérias e atividades, incluindo estatísticas de desempenho (notas de trabalhos, provas, e quizzes interativos) e áreas de que necessitam de atenção (disciplinas com menores notas).
- Há um painel de controle onde o aluno vê o resumo do seu desempenho.
- O aluno recebe alertas ou lembretes de atividades pendentes ou áreas de baixo desempenho.

--------

**História do Usuário 7** - “Como aluno, eu quero saber quando houver novos conteúdos, para que eu não me atrase nos estudos.”
**Critérios de Aceitação**
- Os alunos recebem notificações automáticas quando novos conteúdos são adicionados.
- As notificações podem ser configuradas para serem enviadas por e-mail e/ou dentro da própria plataforma.
- Os alunos podem ajustar suas preferências de notificação (ex: frequência, tipos de conteúdo).

--------

**História do Usuário 8** - “Como aluno, eu quero uma plataforma onde eu encontre vídeos, quizzes e outros métodos de ensino, para que fuja da metodologia tradicional.”
**Critérios de Aceitação**
- O aluno pode acessar uma variedade de conteúdos, incluindo vídeos, quizzes e apresentações.
- Os conteúdos devem se encontrar na tela inicial.

--------

**História do Usuário 9** - “Como aluno, eu quero poder avaliar os conteúdos, para que os professores possam saber se estou gostando ou não dos conteúdos.”
**Critérios de Aceitação**
- Os alunos podem avaliar conteúdos com uma classificação por estrelas ou adicionar comentários anônimos.
- As avaliações e comentários são visíveis para os professores e coordenadores para análise de feedback.

--------

**História do Usuário 10** - “Como coordenador, eu quero ferramentas que analisem dados de diferentes fontes, para que eu não tenha que analisá-las uma por uma.”
**Critérios de Aceitação**
- A plataforma integra dados de progresso dos alunos, desempenho dos professores e avaliações de conteúdo em um único painel.
- Existem ferramentas de análise que apresentam dados agregados e detalhados de maneira visual (gráficos, tabelas).

--------

**História do Usuário 11** - “Como coordenador, eu quero um sistema que gere relatórios sobre o desempenho dos professores, para que eu possa gerenciá-los melhor.”
**Critérios de Aceitação**
- A plataforma gera relatórios periódicos sobre o desempenho dos professores.
- Os relatórios incluem feedback dos alunos, progresso dos alunos e engajamento com a plataforma.
- Os relatórios são personalizáveis e podem ser exportados nos formatos PDF e Excel.
- Coordenadores podem comparar o desempenho entre diferentes professores ou turmas.

--------

**História do Usuário 12** - “Como coordenador, eu quero uma interface onde os professores possam reconhecer rapidamente as funcionalidades do sistema, para que realizem suas tarefas de forma mais eficiente.”
**Critérios de Aceitação**
- A interface deve possuir signos estáticos, dinâmicos e metalinguísticos, focado na experiência do usuário



