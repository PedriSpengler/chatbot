// Verde para "Finalizado"
// Amarelo para "Pendente"
// Azul para "Em andamento"
// Cinza para "Novo"
import { v4 as uuidv4 } from "uuid";

import { Columns } from "../types";

export const Board: Columns = {
	backlog: {
		name: "Novo",
		items: [
			{
				id: uuidv4(),
				namePaciente: "Pedro Joaquim",
				lastMessage: "Olá, tudo bem?",
				priority: "novo",
				deadline: 34,
			},
			{
				id: uuidv4(),
				namePaciente: "João Ferreira",
				lastMessage: "Gostaria de marcar um atendimento",
				priority: "novo",
				deadline: 5,
			},
		],
	},
	pending: {
		name: "Em Andamento",
		items: [
			{
				id: uuidv4(),
				namePaciente: "Gustavo Arnaldo",
				lastMessage: "Qual horário seria melhor para você?",
				priority: "andamento",
				deadline: 9,
			},
			{
				id: uuidv4(),
				namePaciente: "Lucas Fiorenzi",
				lastMessage: "Olá, estou com dúvidas sobre o plano ..",
				priority: "andamento",
				deadline: 21,
			},
		],
	},
	todo: {
		name: "Pendente",
		items: [
			{
				id: uuidv4(),
				namePaciente: "Ana Letícia",
				lastMessage: "Bom dia !!!!!",
				priority: "pendente",
				deadline: 20,
			},
		],
	},
	doing: {
		name: "Finalizado",
		items: [
			{
				id: uuidv4(),
				namePaciente: "Clara Dias",
				lastMessage: "Atendimento Incrível !! Obrigada !",
				priority: "finalizado",
				deadline: 30,
			},
			{
				id: uuidv4(),
				namePaciente: "Luan Pereira",
				lastMessage: "Boa tarde, como estão?",
				priority: "finalizado",
				deadline: 5,
			},
		],
	},
};
