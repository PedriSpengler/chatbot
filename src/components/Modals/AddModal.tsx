/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

/*
  Definição da interface Tag:
  Representa uma tag associada a uma tarefa, contendo informações
  como nome do paciente, cores de fundo e texto, celular e e-mail.
*/
interface Tag {
	namePaciente: string;
	bg: string;
	text: string;
	celular: string;
	email: string;
}

/*
  Interface AddModalProps:
  Define as propriedades esperadas pelo componente AddModal, incluindo:
*/
interface AddModalProps {
	isOpen: boolean;
	onClose: () => void;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleAddTask: (taskData: any) => void;
}

/*
  Componente AddModal:
  Um modal que permite adicionar um novo cliente/tarefa.
  Contém campos de entrada para nome, celular e e-mail,
  além de um botão para confirmar o cadastro.
*/
const AddModal = ({ isOpen, onClose, setOpen, handleAddTask }: AddModalProps) => {
	/*
	  Definição do estado inicial para os dados da tarefa.
	  Contém propriedades como ID único, nome do paciente, celular,
	  e-mail, última mensagem, prioridade, prazo e tags.
	*/
	const initialTaskData = {
		id: uuidv4(), // Gera um identificador único para a tarefa
		namePaciente: "",
		celular: "",
		email: "",
		lastMessage: "",
		priority: "",
		deadline: 0,
		tags: [] as Tag[], // Lista vazia de tags associadas à tarefa
	};

	/*
	  Estado para armazenar os dados do cliente/tarefa.
	  Inicialmente, recebe os valores definidos em initialTaskData.
	*/
	const [taskData, setTaskData] = useState(initialTaskData);
	
	/*
	  Estado para indicar se há erro no preenchimento dos campos obrigatórios.
	*/
	const [error, setError] = useState(false);

	/*
	  Manipulador de eventos para capturar mudanças nos campos de entrada.
	  Atualiza o estado taskData com os novos valores digitados pelo usuário.
	  Além disso, reseta o erro caso o usuário comece a preencher os campos.
	*/
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setTaskData((prev) => ({ ...prev, [name]: value }));
		setError(false); // Remove o erro ao começar a digitar
	};

	/*
	  Função para fechar o modal.
	  Além de definir isOpen como falso, também reseta os dados da tarefa
	  e o estado de erro para evitar que mensagens de erro persistam.
	*/
	const closeModal = () => {
		setOpen(false);
		onClose();
		setTaskData(initialTaskData);
		setError(false);
	};

	/*
	  Função chamada ao confirmar o cadastro do cliente/tarefa.
	  Verifica se os campos obrigatórios (nomePaciente, celular e email) estão preenchidos.
	  Caso algum esteja vazio, exibe a mensagem de erro.
	  Se estiverem preenchidos, adiciona a tarefa e fecha o modal.
	*/
	const handleSubmit = () => {
		const { namePaciente, celular, email } = taskData;

		if (!namePaciente || !celular || !email) {
			setError(true);
			return;
		}

		handleAddTask(taskData);
		closeModal();
	};

	/*
	  Estrutura do modal:
	  - O modal ocupa toda a tela quando está aberto (`isOpen ? "grid" : "hidden"`).
	  - Um fundo escuro semi-transparente cobre a tela, permitindo que o clique feche o modal.
	  - O conteúdo do modal está dentro de um container centralizado, contendo:
	    - Campos de entrada para nome, celular e e-mail.
	    - Uma mensagem de erro caso os campos obrigatórios não sejam preenchidos.
	    - Um botão para confirmar o cadastro do cliente/tarefa.
	*/
	return (
		<div
			className={`w-screen h-screen place-items-center fixed top-0 left-0 ${
				isOpen ? "grid" : "hidden"
			}`}
		>
			{/* Fundo escuro semi-transparente, fecha o modal ao clicar */}
			<div
				className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
				onClick={closeModal}
			></div>

			{/* Conteúdo do modal */}
			<div className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
				{/* Campo de entrada para Nome do Cliente */}
				<input
					type="text"
					name="namePaciente"
					value={taskData.namePaciente}
					onChange={handleChange}
					placeholder="Nome Cliente"
					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
				/>

				{/* Campo de entrada para Celular */}
				<input
					type="text"
					name="celular"
					value={taskData.celular}
					onChange={handleChange}
					placeholder="Celular"
					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
				/>

				{/* Campo de entrada para Email */}
				<input
					type="text"
					name="email"
					value={taskData.email}
					onChange={handleChange}
					placeholder="Email"
					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
				/>

				{/* Exibição de erro caso algum campo obrigatório esteja vazio */}
				{error && <p className="text-red-500 text-sm">Preencha todos os campos!</p>}

				{/* Botão para confirmar o cadastro do cliente/tarefa */}
				<button
					className="w-full mt-3 rounded-md h-9 bg-orange-400 text-blue-50 font-medium disabled:bg-gray-400"
					onClick={handleSubmit}
				>
					Confirmar Cliente
				</button>
			</div>
		</div>
	);
};

export default AddModal;
