/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Tag {
	namePaciente: string;
	bg: string;
	text: string;
	celular: string;
	email: string;
}

interface AddModalProps {
	isOpen: boolean;
	onClose: () => void;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleAddTask: (taskData: any) => void;
}

const AddModal = ({ isOpen, onClose, setOpen, handleAddTask }: AddModalProps) => {
	const initialTaskData = {
		id: uuidv4(),
		namePaciente: "",
		celular: "",
		email: "",
		lastMessage: "",
		priority: "",
		deadline: 0,
		tags: [] as Tag[],
	};

	const [taskData, setTaskData] = useState(initialTaskData);
	const [error, setError] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setTaskData((prev) => ({ ...prev, [name]: value }));
		setError(false); // Resetar erro ao digitar
	};

	const closeModal = () => {
		setOpen(false);
		onClose();
		setTaskData(initialTaskData);
		setError(false);
	};

	const handleSubmit = () => {
		const { namePaciente, celular, email } = taskData;

		if (!namePaciente || !celular || !email) {
			setError(true);
			return;
		}

		handleAddTask(taskData);
		closeModal();
	};

	return (
		<div
			className={`w-screen h-screen place-items-center fixed top-0 left-0 ${
				isOpen ? "grid" : "hidden"
			}`}
		>
			<div
				className="w-full h-full bg-black opacity-70 absolute left-0 top-0 z-20"
				onClick={closeModal}
			></div>
			<div className="md:w-[30vw] w-[90%] bg-white rounded-lg shadow-md z-50 flex flex-col items-center gap-3 px-5 py-6">
				<input
					type="text"
					name="namePaciente"
					value={taskData.namePaciente}
					onChange={handleChange}
					placeholder="Nome Cliente"
					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
				/>
				<input
					type="text"
					name="celular"
					value={taskData.celular}
					onChange={handleChange}
					placeholder="Celular"
					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
				/>
				<input
					type="text"
					name="email"
					value={taskData.email}
					onChange={handleChange}
					placeholder="Email"
					className="w-full h-12 px-3 outline-none rounded-md bg-slate-100 border border-slate-300 text-sm font-medium"
				/>
				{error && <p className="text-red-500 text-sm">Preencha todos os campos!</p>}
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
