export type TaskT = {
	id: string;
	namePaciente: string;
	lastMessage: string;
	priority: string;
	email: string;
	celular: string;
	deadline: number;
};

type Column = {
	name: string;
	items: TaskT[];
};

export type Columns = {
	[key: string]: Column;
};