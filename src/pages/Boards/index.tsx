"use client"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useState } from "react"
import { Board } from "../../data/board"
import type { Columns } from "../../types"
import { onDragEnd } from "../../helpers/onDragEnd"
import { AddOutline, TrashOutline, CreateOutline } from "react-ionicons"
import AddModal from "../../components/Modals/AddModal"
import Task from "../../components/Task"
import { v4 as uuidv4 } from "uuid"

const Home = () => {
  const [columns, setColumns] = useState<Columns>(Board)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedColumn, setSelectedColumn] = useState("")
  const [editColumnId, setEditColumnId] = useState<string | null>(null)
  const [editColumnName, setEditColumnName] = useState("")
  const [newColumnName, setNewColumnName] = useState("")
  const [addingColumn, setAddingColumn] = useState(false)

  const openModal = (columnId: any) => {
    setSelectedColumn(columnId)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns }
    newBoard[selectedColumn].items.push(taskData)
    setColumns(newBoard)
  }

  const handleDeleteColumn = (columnId: string) => {
    const newColumns = { ...columns }
    delete newColumns[columnId]
    setColumns(newColumns)
  }

  const handleEditColumn = (columnId: string, newName: string) => {
    const newColumns = { ...columns }
    newColumns[columnId].name = newName
    setColumns(newColumns)
    setEditColumnId(null)
  }

  const handleAddColumn = () => {
    if (newColumnName.trim() === "") return
    const newColumnId = uuidv4()
    setColumns({
      ...columns,
      [newColumnId]: { name: newColumnName, items: [] },
    })
    setNewColumnName("")
    setAddingColumn(false)
  }

  return (
    <>
      <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
        <div className="w-full flex items-start px-5 pb-8 overflow-x-auto">
          <div className="flex gap-4">
            {Object.entries(columns).map(([columnId, column]: any) => (
              <div className="flex flex-col gap-0" key={columnId}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                    >
                      <div className="flex items-center justify-between py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px] px-3">
                        {editColumnId === columnId ? (
                          <input
                            type="text"
                            value={editColumnName}
                            onChange={(e) => setEditColumnName(e.target.value)}
                            onBlur={() => handleEditColumn(columnId, editColumnName)}
                            autoFocus
                            className="border rounded px-2 py-1 w-full"
                          />
                        ) : (
                          <span>{column.name}</span>
                        )}
                        <div className="flex gap-2">
                          <CreateOutline
                            color={"#555"}
                            onClick={() => {
                              setEditColumnId(columnId)
                              setEditColumnName(column.name)
                            }}
                            className="cursor-pointer"
                          />
                          <TrashOutline
                            color={"#555"}
                            onClick={() => handleDeleteColumn(columnId)}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                      {column.items.map((task: any, index: any) => (
                        <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                          {(provided: any) => <Task provided={provided} task={task} />}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div
                  onClick={() => openModal(columnId)}
                  className="flex cursor-pointer items-center justify-center gap-1 py-[10px] w-[18.2rem] opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
                >
                  <AddOutline color={"#555"} />
                  Add Conversa
                </div>
              </div>
            ))}

            {/* Add new column */}
            <div className="flex flex-col gap-0 items-center">
              {addingColumn ? (
                <div className="flex flex-col items-center gap-2 py-5">
                  <input
                    type="text"
                    placeholder="Nome do funil"
                    value={newColumnName}
                    onChange={(e) => setNewColumnName(e.target.value)}
                    className="border rounded px-2 py-1 w-full"
                  />
                  <button onClick={handleAddColumn} className="bg-blue-500 text-white px-4 py-1 rounded">
                    Adicionar
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setAddingColumn(true)}
                  className="flex cursor-pointer items-center justify-center gap-1 py-[10px] w-[18.2rem] opacity-90 mt-5 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
                >
                  <AddOutline color={"#555"} />
                  Novo Funil
                </div>
              )}
            </div>
          </div>
          {/* Spacer div */}
          <div className="w-0 flex-shrink-0"></div>
        </div>
      </DragDropContext>

      <AddModal isOpen={modalOpen} onClose={closeModal} setOpen={setModalOpen} handleAddTask={handleAddTask} />
    </>
  )
}

export default Home

