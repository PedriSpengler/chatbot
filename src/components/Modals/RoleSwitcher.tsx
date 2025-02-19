import { useState } from "react"
import { ChevronDownOutline } from "react-ionicons"

const RoleSwitcher = ({ role, setRole }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-md"
      >
        {role}
        <ChevronDownOutline color="#fff" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-40 bg-white dark:bg-gray-800 rounded shadow-md">
          <button
            onClick={() => {
              setRole("Cliente")
              setIsOpen(false)
            }}
            className="text-white block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Cliente
          </button>
          <button
            onClick={() => {
              setRole("Atendente")
              setIsOpen(false)
            }}
            className="text-white block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            Atendente
          </button>
        </div>
      )}
    </div>
  )
}

export default RoleSwitcher
