// Desabilita o uso de "any" explicitamente, mas está sendo utilizado para tipagem do parâmetro `result`, `columns` e `setColumns`
export const onDragEnd = (result: any, columns: any, setColumns: any) => {

	// Verifica se a tarefa foi arrastada para uma nova posição (se existe um destino para a tarefa)
	if (!result.destination) return;
  
	// Desestruturação para obter as informações de origem e destino do arrasto
	const { source, destination } = result;
  
	// Mapeamento das colunas para os valores de prioridade correspondentes
	const priorityMap: Record<string, string> = {
	  backlog: "novo",
	  pending: "andamento",
	  todo: "pendente",
	  doing: "finalizado",
	};
  
	// Se a tarefa foi movida para uma coluna diferente
	if (source.droppableId !== destination.droppableId) {
  
	  // Obtém as colunas de origem e destino
	  const sourceColumn = columns[source.droppableId];
	  const destColumn = columns[destination.droppableId];
  
	  // Faz uma cópia das listas de itens das colunas de origem e destino
	  const sourceItems = [...sourceColumn.items];
	  const destItems = [...destColumn.items];
  
	  // Remove a tarefa da posição original
	  const [removed] = sourceItems.splice(source.index, 1);
  
	  // Atualiza a prioridade da tarefa com base na coluna de destino
	  removed.priority = priorityMap[destination.droppableId];
  
	  // Adiciona a tarefa removida na nova posição da coluna de destino
	  destItems.splice(destination.index, 0, removed);
  
	  // Atualiza o estado das colunas com as novas listas de itens
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
	  // Se a tarefa foi movida dentro da mesma coluna
	  const column = columns[source.droppableId];
	  const copiedItems = [...column.items];
  
	  // Remove a tarefa da posição original
	  const [removed] = copiedItems.splice(source.index, 1);
  
	  // Adiciona a tarefa removida na nova posição da coluna
	  copiedItems.splice(destination.index, 0, removed);
  
	  // Atualiza o estado da coluna com a nova ordem dos itens
	  setColumns({
		...columns,
		[source.droppableId]: {
		  ...column,
		  items: copiedItems,
		},
	  });
	}
  };
  