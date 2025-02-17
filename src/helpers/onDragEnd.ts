// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onDragEnd = (result: any, columns: any, setColumns: any) => {
	if (!result.destination) return;

	const { source, destination } = result;

	// Mapeamento de colunas para novas prioridades
	const priorityMap: Record<string, string> = {
		backlog: "novo",
		pending: "andamento",
		todo: "pendente",
		doing: "finalizado",
	};

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);

		// Atualiza a prioridade com base na nova coluna
		removed.priority = priorityMap[destination.droppableId];

		destItems.splice(destination.index, 0, removed);

		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems,
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems,
			},
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);

		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems,
			},
		});
	}
};
