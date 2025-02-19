"use client" // Indica que este é um componente client-side no Next.js.

import { useState, useEffect } from "react"
import Image from "../../assets/images/atendente.jpg"

const Chat = () => {
  // Estado para armazenar as mensagens do chat.
  // Cada mensagem tem um texto e um remetente ("cliente" ou "atendente").
  const [messages, setMessages] = useState<{ text: string; sender: "cliente" | "atendente" }[]>([])

  // Estado para armazenar a nova mensagem que está sendo digitada pelo usuário.
  const [newMessage, setNewMessage] = useState("")

  // Efeito que adiciona uma mensagem inicial do atendente quando o componente é montado.
  useEffect(() => {
    setMessages([{ text: "Olá, bem-vindo ao ChatBOT, o que deseja?", sender: "atendente" }])
  }, [])

  // Função para enviar uma mensagem.
  // Verifica se a mensagem não está vazia antes de adicioná-la ao estado.
  // Depois de enviada, a caixa de entrada é limpa.
  const sendMessage = () => {
    if (newMessage.trim() === "") return
    setMessages([...messages, { text: newMessage, sender: "cliente" }])
    setNewMessage("")
  }

  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Área de exibição das mensagens com rolagem vertical */}
      <div className="h-80 overflow-y-auto border-b border-gray-300 dark:border-gray-600 mb-4 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 mb-4 ${msg.sender === "cliente" ? "justify-end" : "justify-start"}`}
          >
            {/* Exibe a imagem do atendente ao lado das mensagens enviadas por ele */}
            {msg.sender === "atendente" && (
              <img src={Image} alt="Atendente" className="w-8 h-8 rounded-full" />
            )}
            {/* Caixa de mensagem com estilos diferentes para cliente e atendente */}
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === "cliente"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Área de entrada de mensagens e botão de envio */}
      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Permite enviar a mensagem ao pressionar "Enter".
          placeholder="Digite sua mensagem..."
          className="flex-1 p-2 rounded border dark:bg-gray-700 dark:text-white"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </div>
    </div>
  )
}

export default Chat
