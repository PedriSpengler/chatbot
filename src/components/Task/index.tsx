import { useState } from "react";
import { TimeOutline, ChatbubbleOutline } from "react-ionicons";
import type { TaskT } from "../../types";
import ChatModal from "../Modals/ChatModal";

// Definição da interface para as propriedades do componente Task.
// A interface TaskProps define os tipos esperados para cada propriedade,
// garantindo segurança e previsibilidade no uso do componente.
interface TaskProps {
  task: TaskT;
  provided: any;
  darkMode: boolean;
}

// Componente Task, responsável por renderizar uma tarefa individual.
// Ele exibe informações como nome do paciente, última mensagem, prioridade e prazo.
// Também permite abrir um chat associado à tarefa.
const Task = ({ task, provided, darkMode }: TaskProps) => {
  const { namePaciente, lastMessage, priority, deadline } = task;
  const [isChatOpen, setIsChatOpen] = useState(false); // Estado para controlar a abertura do chat modal.

  return (
    <>
      {/* Contêiner principal da tarefa, permitindo arrastar o item dentro de um quadro */}
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`w-full cursor-grab flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4 
          ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        {/* Bloco superior contendo o nome do paciente e a última mensagem trocada */}
        <div className="w-full flex items-start flex-col gap-0">
          <span className={`text-[15.5px] font-medium ${darkMode ? "text-gray-300" : "text-[#555]"}`}>
            {namePaciente}
          </span>
          <span className={`text-[13.5px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {lastMessage}
          </span>
        </div>

        {/* Linha divisória com estilo tracejado para separar as informações */}
        <div className={`w-full border border-dashed ${darkMode ? "border-gray-600" : "border-gray-300"}`}></div>

        {/* Bloco inferior contendo tempo limite, botão de chat e indicador de prioridade */}
        <div className="w-full flex items-center justify-between">
          {/* Seção exibindo o prazo de conclusão da tarefa */}
          <div className="flex items-center gap-1">
            <TimeOutline color={darkMode ? "#ccc" : "#666"} width="19px" height="19px" />
            <span className={`text-[13px] ${darkMode ? "text-gray-400" : "text-gray-700"}`}>{deadline} mins</span>
          </div>

          {/* Botão para abrir o chat da tarefa */}
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Previne eventos indesejados na hierarquia de componentes
                setIsChatOpen(true);
              }}
              className="flex items-center justify-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-sm"
            >
              <ChatbubbleOutline color="white" height="16px" width="16px" />
              <span className="text-[12px]">Abrir Chat</span>
            </button>
          </div>

          {/* Indicador de prioridade da tarefa com cores distintas */}
          <div
            className={`w-[60px] rounded-full h-[5px] ${
              priority === "pendente"
                ? "bg-yellow-500"
                : priority === "andamento"
                ? "bg-blue-500"
                : priority === "finalizado"
                ? "bg-green-500"
                : "bg-gray-500"
            }`}
          ></div>
        </div>
      </div>

      {/* Modal de Chat que é exibido quando isChatOpen está true */}
      {isChatOpen && <ChatModal task={task} onClose={() => setIsChatOpen(false)} darkMode={darkMode} />}
    </>
  );
};

export default Task;
