"use client"

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { useState, useEffect } from "react"
import { Board } from "../../data/board"
import type { Columns } from "../../types"
import { onDragEnd } from "../../helpers/onDragEnd"
import { AddOutline, TrashOutline, CreateOutline, MoonOutline, SunnyOutline } from "react-ionicons"
import AddModal from "../../components/Modals/AddModal"
import Task from "../../components/Task"
import { v4 as uuidv4 } from "uuid"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import RoleSwitcher from "../../components/Modals/RoleSwitcher"
import Chat from "../../components/Modals/Chat" // Importe o componente Chat

// Componente Home
const Home = () => {
  // Estado para as colunas e outras variáveis de controle
  const [columns, setColumns] = useState<Columns>(Board)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedColumn, setSelectedColumn] = useState("")
  const [editColumnId, setEditColumnId] = useState<string | null>(null)
  const [editColumnName, setEditColumnName] = useState("")
  const [newColumnName, setNewColumnName] = useState("")
  const [addingColumn, setAddingColumn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [role, setRole] = useState<"Cliente" | "Atendente">("Atendente") // Estado para o role

  // Hook para verificar e aplicar o tema armazenado
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setDarkMode(true)
    }
  }, [])

  // Função para alternar entre os modos de tema
  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark"
    setDarkMode(!darkMode)
    localStorage.setItem("theme", newTheme)
  }

  // Função para alterar o role (Cliente ou Atendente)
  const handleRoleChange = (newRole: "Cliente" | "Atendente") => {
    setRole(newRole)
  }

  // Função para abrir o modal de adicionar tarefa
  const openModal = (columnId: any) => {
    setSelectedColumn(columnId)
    setModalOpen(true)
  }

  // Função para fechar o modal de adicionar tarefa
  const closeModal = () => {
    setModalOpen(false)
  }

  // Função para adicionar uma nova tarefa
  const handleAddTask = (taskData: any) => {
    const newBoard = { ...columns }
    newBoard[selectedColumn].items.push(taskData)
    setColumns(newBoard)
  }

  // Função para deletar uma coluna
  const handleDeleteColumn = (columnId: string) => {
    const newColumns = { ...columns }
    delete newColumns[columnId]
    setColumns(newColumns)
  }

  // Função para editar o nome de uma coluna
  const handleEditColumn = (columnId: string, newName: string) => {
    const newColumns = { ...columns }
    newColumns[columnId].name = newName
    setColumns(newColumns)
    setEditColumnId(null)
  }

  // Função para adicionar uma nova coluna
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
    // Bloco principal de renderização com tema condicional
    <div className={darkMode ? "dark" : ""}>
      {/* Navbar e Sidebar */}
      <Navbar darkMode={darkMode} />
      <Sidebar darkMode={darkMode} />

      {/* Seção de controle do tema e role */}
      <div className="flex justify-end p-4 gap-4">
        <RoleSwitcher role={role} setRole={handleRoleChange} /> {/* Passe o role e a função para o RoleSwitcher */}
        <button onClick={toggleTheme} className="p-2 rounded-md bg-gray-300 dark:bg-gray-700">
          {darkMode ? <SunnyOutline color={"#fff"} /> : <MoonOutline color={"#fff"} />}
        </button>
      </div>

      {/* Renderização condicional baseada no role */}
      {role === "Atendente" ? (
        <DragDropContext onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}>
          <div className="w-full flex items-start px-5 pb-8 overflow-x-auto">
            <div className="flex gap-4">
              {/* Mapeamento das colunas */}
              {Object.entries(columns).map(([columnId, column]: any) => (
                <div className="flex flex-col gap-0" key={columnId}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided: any) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                      >
                        {/* Cabeçalho da coluna */}
                        <div className="flex items-center justify-between py-[10px] w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm text-[#555] dark:text-white font-medium text-[15px] px-3">
                          {editColumnId === columnId ? (
                            <input
                              type="text"
                              value={editColumnName}
                              onChange={(e) => setEditColumnName(e.target.value)}
                              onBlur={() => handleEditColumn(columnId, editColumnName)}
                              autoFocus
                              className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
                            />
                          ) : (
                            <span>{column.name}</span>
                          )}
                          <div className="flex gap-2">
                            {/* Ícones de edição e exclusão */}
                            <span
                              onClick={() => {
                                setEditColumnId(columnId)
                                setEditColumnName(column.name)
                              }}
                              className="cursor-pointer"
                            >
                              <CreateOutline color="#fff" />
                            </span>

                            <span
                              onClick={() => handleDeleteColumn(columnId)}
                              className="cursor-pointer"
                            >
                              <TrashOutline color="#fff" />
                            </span>

                          </div>
                        </div>

                        {/* Tarefas dentro da coluna */}
                        {column.items.map((task: any, index: any) => (
                          <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                            {(provided: any) => <Task provided={provided} task={task} darkMode={darkMode} />}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  
                  {/* Botão para adicionar nova conversa */}
                  <div
                    onClick={() => openModal(columnId)}
                    className="flex cursor-pointer items-center justify-center gap-1 py-[10px] w-[18.2rem] opacity-90 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-[#555] dark:text-white font-medium text-[15px]"
                  >
                    <AddOutline color="#fff" />
                    Add Conversa
                  </div>
                </div>
              ))}

              {/* Seção para adicionar nova coluna */}
              <div className="flex flex-col gap-0 items-center">
                {addingColumn ? (
                  <div className="flex flex-col items-center gap-2 py-5">
                    <input
                      type="text"
                      placeholder="Nome do funil"
                      value={newColumnName}
                      onChange={(e) => setNewColumnName(e.target.value)}
                      className="border rounded px-2 py-1 w-full dark:bg-gray-700 dark:text-white"
                    />
                    <button onClick={handleAddColumn} className="bg-blue-500 text-white px-4 py-1 rounded">
                      Adicionar
                    </button>
                  </div>
                ) : (
                  <div
                    onClick={() => setAddingColumn(true)}
                    className="flex cursor-pointer items-center justify-center gap-1 py-[10px] w-[18.2rem] opacity-90 mt-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm text-[#555] dark:text-white font-medium text-[15px]"
                  >
                    <AddOutline color={darkMode ? "#fff" : "#555"} />
                    Novo Funil
                  </div>
                )}
              </div>
            </div>
            {/* Espaçador */}
            <div className="w-0 flex-shrink-0"></div>
          </div>
        </DragDropContext>
      ) : (
        // Renderiza o componente Chat se o role for "Cliente"
        <Chat/> 
      )}

      {/* Modal para adicionar tarefa */}
      <AddModal isOpen={modalOpen} onClose={closeModal} setOpen={setModalOpen} handleAddTask={handleAddTask} />
    </div>
  )
}

export default Home
