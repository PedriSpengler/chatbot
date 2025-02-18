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
				email: "pedro@gmail.com",
				celular: "11999999999",
				deadline: 34,
			},
			{
				id: uuidv4(),
				namePaciente: "João Ferreira",
				lastMessage: "Gostaria de marcar um atendimento",
				priority: "novo",
				email: "joaoferreira@gmail.com",
				celular: "6546456564",
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
				email: "g.arnaldo@gmail.com",
				celular: "645645645456",
				deadline: 9,
			},
			{
				id: uuidv4(),
				namePaciente: "Lucas Fiorenzi",
				lastMessage: "Olá, estou com dúvidas sobre o plano ..",
				priority: "andamento",
				email: "fiorenzi09@gmail.com",
				celular: "11757444",
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
				email: "anale111@gmail.com",
				celular: "767567865",
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
				email: "claradias@gmail.com",
				celular: "7568888888",
				deadline: 30,
			},
			{
				id: uuidv4(),
				namePaciente: "Luan Pereira",
				lastMessage: "Boa tarde, como estão?",
				priority: "finalizado",
				email: "lpereira@gmail.com",
				celular: "6753333455",
				deadline: 5,
			},
		],
	},
};
