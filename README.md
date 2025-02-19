# README - Teste Técnico de Desenvolvedor Front-end

Este repositório contém o código para o teste técnico da Cubo Chat para a vaga de Desenvolvedor Front-end. O objetivo é desenvolver uma aplicação web para gestão de atendimentos, incluindo funcionalidades como Kanban de atendimentos, personalização de funis de atendimento e chat para interação com clientes.

✨ Funcionalidades

🛠️ Kanban de Atendimentos

Arrastar e soltar (Drag & Drop) cards de atendimento entre colunas.

Cada card deve conter:

Nome do cliente

Última mensagem trocada

Tempo desde a última interação

Indicador visual do status

📝 Personalização dos Funis de Atendimento

Adicionar novos funis de atendimento (além dos padrões: Novo, Em andamento, Pendente, Finalizado).

Renomear funis existentes.

Remover funis caso não contenham atendimentos ativos.

💬 Tela de Atendimento (Chat)

Visualização e interação em um chat para cada atendimento.

Interface do chat deve conter:

Informações do contato (nome, telefone, e-mail).

Histórico de mensagens trocadas.

Campo para envio de mensagens.

Suporte ao envio de arquivos (imagens, PDFs, etc.).

Exibição de horário de envio e recebimento das mensagens.

👨‍💼 Simulação de Cliente e Atendente

Simulação de interação real com dois perfis de usuário:

Cliente: pode enviar mensagens para o suporte.

Atendente: pode responder mensagens e mover os atendimentos no Kanban.

Possibilidade de alternar entre os perfis na interface.

⚙️ Tecnologias Utilizadas

Next.js (React + TypeScript)

TailwindCSS para estilização

React DnD para implementação do Drag & Drop

🚀 Instruções para Executar o Projeto

Clone este repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Acesse a pasta do projeto:

cd nome-do-repositorio

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm run dev

Acesse a aplicação no navegador em http://localhost:3000.

🌐 Sugestões de Melhorias Futuras

Implementar testes unitários e de integração para garantir a qualidade do código.

Retirar Bugs de darkmode.

Adicionar funcionalidades extras, como notificações push ou integração com outras ferramentas de atendimento.

Melhorar a interface do usuário com animações e transições mais suaves.

Otimizar o desempenho para suportar um grande número de atendimentos.

📘 Observações

O código do teste técnico está organizado de acordo com as funcionalidades descritas acima.

A simulação de cliente e atendente pode ser implementada de diversas formas, ficando a critério do candidato a melhor abordagem.
