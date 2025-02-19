# 📌 Teste Técnico - Desenvolvedor Front-end | Cubo Chat  

Este repositório contém o código do teste técnico para a vaga de **Desenvolvedor Front-end** na **Cubo Chat**. O objetivo é desenvolver uma aplicação web para gestão de atendimentos, permitindo organizar interações com clientes por meio de um **Kanban**, **personalização de funis** e um **chat interativo**.  

---

## ✨ Funcionalidades  

### 🛠️ Kanban de Atendimentos  
- Arrastar e soltar (**Drag & Drop**) os cards entre colunas.  
- Cada card exibe:  
  - **Nome do cliente**  
  - **Última mensagem trocada**  
  - **Tempo desde a última interação**  
  - **Indicador visual do status**  

### 📝 Personalização dos Funis de Atendimento  
- Criar novos funis (além dos padrões: **Novo, Em andamento, Pendente, Finalizado**).  
- Renomear funis existentes.  
- Remover funis vazios (sem atendimentos ativos).  

### 💬 Tela de Atendimento (Chat)  
- Interface de chat para interação entre cliente e atendente.  
- Exibição de:  
  - **Nome, telefone e e-mail do contato**  
  - **Histórico de mensagens trocadas**  
  - **Horário de envio/recebimento das mensagens**  
  - **Suporte ao envio de arquivos (imagens, PDFs, etc.)**  
- Campo para envio de mensagens.  

### 👨‍💼 Simulação de Cliente e Atendente  
- Cliente pode enviar mensagens para o suporte.  
- Atendente pode responder mensagens e mover os atendimentos no **Kanban**.  
- Possibilidade de alternar entre os perfis na interface.  

---

## ⚙️ Tecnologias Utilizadas  
- **Vite** (React + TypeScript)  
- **TailwindCSS** para estilização  
- **React DnD** para implementação do Drag & Drop  

---

## 🚀 Como Executar o Projeto  

1. **Clone este repositório:**  
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Navegue até o diretório do projeto:**
   ```sh
    cd nome-do-repositorio

3. **Instale as dependências:**
   ```sh
    npm install

4. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev

5. **Abra o projeto no seu navegador:**
   ```sh
   http://localhost:3000
