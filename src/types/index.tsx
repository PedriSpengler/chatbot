// Definindo o tipo TaskT, que representa uma tarefa com suas propriedades.
export type TaskT = {
	id: string; // Identificador único da tarefa
	namePaciente: string; // Nome do paciente associado à tarefa
	lastMessage: string; // Última mensagem relacionada à tarefa
	priority: string; // Prioridade da tarefa (ex: alta, média, baixa)
	email: string; // E-mail associado à tarefa
	celular: string; // Número de celular associado à tarefa
	deadline: number; // Prazo para conclusão da tarefa, representado por um número (provavelmente timestamp)
};

// Definindo o tipo Column, que representa uma coluna no board e suas tarefas.
type Column = {
	name: string; // Nome da coluna (ex: "To Do", "In Progress", "Done")
	items: TaskT[]; // Lista de tarefas associadas a essa coluna
};

// Definindo o tipo Columns, que é um objeto onde as chaves são identificadores de colunas e os valores são as colunas com suas tarefas.
export type Columns = {
	[key: string]: Column; // A chave é um identificador único para a coluna, e o valor é o objeto Column
};
