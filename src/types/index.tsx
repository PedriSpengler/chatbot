export type TaskT = {
	id: string;
	namePaciente: string;
	lastMessage: string;
	priority: string;
	deadline: number;
};

type Column = {
	name: string;
	items: TaskT[];
};

export type Columns = {
	[key: string]: Column;
};