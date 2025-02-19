"use client"

import { useState, useEffect } from "react"
import Image from "../../assets/images/atendente.jpg"

const Chat = () => {
  const [messages, setMessages] = useState<{ text: string; sender: "cliente" | "atendente" }[]>([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    // Add the initial message when the component mounts
    setMessages([{ text: "Olá, bem-vindo ao ChatBOT, o que deseja?", sender: "atendente" }])
  }, [])

  const sendMessage = () => {
    if (newMessage.trim() === "") return
    setMessages([...messages, { text: newMessage, sender: "cliente" }])
    setNewMessage("")
  }

  return (
    <div className="w-full max-w-lg mx-auto p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="h-80 overflow-y-auto border-b border-gray-300 dark:border-gray-600 mb-4 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 mb-4 ${msg.sender === "cliente" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "atendente" && (
              <img src={Image} alt="Atendente" className="w-8 h-8 rounded-full" />
            )}
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

      <div className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
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

