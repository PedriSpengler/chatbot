/*
  O componente ChatModal é um modal de chat utilizado para interações com pacientes. 
  Ele exibe informações do paciente, histórico de mensagens e permite o envio de novas mensagens com anexos.
*/

import { useState } from "react";
import { TaskT } from "../../types";
import { AttachOutline, CloseOutline } from "react-ionicons"; // Ícones

interface ChatModalProps {
  task: TaskT;
  onClose: () => void;
  darkMode: boolean;
}

interface Message {
  text: string;
  sender: string;
  time: string;
  file: string | null;
}

const ChatModal = ({ task, onClose }: ChatModalProps) => {
  /*
    Estado para armazenar as mensagens enviadas e recebidas.
    Estado para armazenar o conteúdo do campo de entrada de texto.
    Estado para armazenar o arquivo selecionado pelo usuário.
  */
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  /*
    Função para enviar mensagens.
    - Verifica se há uma mensagem ou um arquivo antes de enviar.
    - Cria um objeto de mensagem com remetente "atendente" e adiciona ao estado.
    - Reseta os campos de entrada após o envio.
  */
  const sendMessage = () => {
    if (!inputMessage.trim() && !selectedFile) return;

    const newMessage: Message = {
      text: inputMessage,
      sender: "atendente",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      file: selectedFile ? URL.createObjectURL(selectedFile) : null,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setSelectedFile(null);
  };

  return (
    /*
      Estrutura principal do modal:
      - Overlay de fundo semi-transparente.
      - Container branco centralizado, com bordas arredondadas e sombra.
    */
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[400px] p-4 rounded-lg shadow-lg flex flex-col relative">
        
        {/* Botão para fechar o modal */}
        <button className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200" onClick={onClose}>
          <CloseOutline color={"#555"} height="24px" width="24px" />
        </button>

        {/* Informações do paciente */}
        <h2 className="text-xl font-bold">{task.namePaciente}</h2>
        <p>Telefone: {task.celular}</p>
        <p>Email: {task.email}</p>

        {/* Histórico de mensagens */}
        <div className="mt-4 h-56 overflow-auto bg-gray-100 p-2 rounded flex flex-col gap-2">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500">Nenhuma mensagem ainda.</p>
          ) : (
            messages.map((msg, index) => (
              /*
                Renderização dinâmica das mensagens.
                - Mensagens do atendente aparecem alinhadas à direita com fundo azul.
                - Mensagens do outro lado aparecem alinhadas à esquerda com fundo cinza.
              */
              <div
                key={index}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.sender === "atendente" ? "self-end bg-blue-500 text-white" : "self-start bg-gray-300"
                }`}
              >
                {msg.text && <p>{msg.text}</p>}
                {msg.file && (
                  <a href={msg.file} target="_blank" rel="noopener noreferrer" className="text-blue-200 underline">
                    📎 Anexo
                  </a>
                )}
                <span className="block text-xs text-right opacity-70">{msg.time}</span>
              </div>
            ))
          )}
        </div>

        {/* Área de envio de mensagem */}
        <div className="mt-4 flex gap-2 items-center">
          {/* Campo de entrada de texto */}
          <input
            type="text"
            className="flex-1 border p-2 rounded"
            placeholder="Digite sua mensagem..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />

          {/* Input oculto para upload de arquivo */}
          <input
            type="file"
            className="hidden"
            id="fileInput"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          />
          
          {/* Botão de anexar arquivo */}
          <label htmlFor="fileInput" className="cursor-pointer bg-gray-300 p-2 rounded flex items-center">
            <AttachOutline color={"#555"} height="20px" width="20px" />
          </label>

          {/* Botão de envio */}
          <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-2 rounded">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
