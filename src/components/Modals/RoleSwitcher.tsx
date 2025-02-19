import { useState } from "react"
import { ChevronDownOutline } from "react-ionicons"

// Definição das propriedades esperadas pelo componente RoleSwitcher
interface RoleSwitcherProps {
  role: "Cliente" | "Atendente";  // Define o papel atual do usuário
  setRole: (role: "Cliente" | "Atendente") => void; // Função para atualizar o papel do usuário
}

// Componente responsável por alternar entre os papéis "Cliente" e "Atendente"
const RoleSwitcher: React.FC<RoleSwitcherProps> = ({ role, setRole }) => {
  // Estado para controlar se o menu suspenso está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Botão principal que exibe o papel atual e controla a abertura do menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
      >
        {role}
        <ChevronDownOutline color="#fff" />
      </button>

      {/* Menu suspenso exibindo as opções "Cliente" e "Atendente" */}
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 rounded shadow-md">
          {/* Botão para selecionar "Cliente" */}
          <button
            onClick={() => {
              setRole("Cliente");  // Atualiza o papel para "Cliente"
              setIsOpen(false);  // Fecha o menu suspenso
            }}
            className="text-white block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Cliente
          </button>

          {/* Botão para selecionar "Atendente" */}
          <button
            onClick={() => {
              setRole("Atendente");  // Atualiza o papel para "Atendente"
              setIsOpen(false);  // Fecha o menu suspenso
            }}
            className="text-white block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Atendente
          </button>
        </div>
      )}
    </div>
  );
};

export default RoleSwitcher;
