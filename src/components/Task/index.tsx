import { useState } from "react";
import { TimeOutline, ChatbubbleOutline } from "react-ionicons";
import type { TaskT } from "../../types";
import ChatModal from "../Modals/ChatModal";

interface TaskProps {
  task: TaskT;
  provided: any;
  darkMode: boolean;
}

const Task = ({ task, provided, darkMode }: TaskProps) => {
  const { namePaciente, lastMessage, priority, deadline } = task;
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`w-full cursor-grab flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4 
          ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div className="w-full flex items-start flex-col gap-0">
          <span className={`text-[15.5px] font-medium ${darkMode ? "text-gray-300" : "text-[#555]"}`}>
            {namePaciente}
          </span>
          <span className={`text-[13.5px] ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {lastMessage}
          </span>
        </div>
        <div className={`w-full border border-dashed ${darkMode ? "border-gray-600" : "border-gray-300"}`}></div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <TimeOutline color={darkMode ? "#ccc" : "#666"} width="19px" height="19px" />
            <span className={`text-[13px] ${darkMode ? "text-gray-400" : "text-gray-700"}`}>{deadline} mins</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsChatOpen(true);
              }}
              className="flex items-center justify-center gap-1 bg-blue-500 text-white px-2 py-1 rounded text-sm"
            >
              <ChatbubbleOutline color="white" height="16px" width="16px" />
              <span className="text-[12px]">Abrir Chat</span>
            </button>
          </div>
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

      {/* Modal de Chat */}
      {isChatOpen && <ChatModal task={task} onClose={() => setIsChatOpen(false)} darkMode={darkMode} />}
    </>
  );
};

export default Task;
