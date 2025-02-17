import React from "react";

interface ChatModalProps {
  task: TaskT;
  onClose: () => void;
}

const ChatModal = ({ task, onClose }: ChatModalProps) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">{task.namePaciente}</h2>
        <p>Telefone: {task.phone}</p>
        <p>Email: {task.email}</p>

        {/* Histórico de mensagens */}
        <div className="mt-4 h-48 overflow-auto bg-gray-100 p-2 rounded">
          {/* Renderizar mensagens aqui */}
        </div>

        {/* Campo de envio de mensagem */}
        <div className="mt-4 flex gap-2">
          <input type="text" className="flex-1 border p-2 rounded" placeholder="Digite sua mensagem..." />
          <button className="bg-blue-500 text-white px-3 py-2 rounded">Enviar</button>
        </div>

        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
