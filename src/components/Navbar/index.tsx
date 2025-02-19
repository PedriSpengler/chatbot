import {
	ChevronDown,
	NotificationsOutline,
	PersonCircle,
	SearchOutline,
	SettingsOutline,
	ShareSocialOutline,
  } from "react-ionicons";
  
  // Componente Navbar responsável pela barra de navegação superior
  // Recebe a propriedade `darkMode` para alternar entre os temas claro e escuro
  const Navbar = ({ darkMode }: { darkMode: boolean }) => {
	return (
	  <div
		className={`md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b ${
		  darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-slate-300 bg-white"
		}`}
	  >
		{/* Seção do perfil do usuário, contendo o ícone, nome e um ícone dropdown */}
		<div className="flex items-center gap-3 cursor-pointer">
		  <PersonCircle color={darkMode ? "#fff" : "#000"} width={"28px"} height={"28px"} />
		  <span className="text-blue-400 font-semibold md:text-lg text-sm whitespace-nowrap">
			Gustavo Zaratini
		  </span>
		  <ChevronDown color={darkMode ? "#fff" : "#000"} width={"16px"} height={"16px"} />
		</div>
  
		{/* Barra de pesquisa central da navbar, com um ícone de busca e um campo de input */}
		<div
		  className={`md:w-[800px] w-[130px] ${
			darkMode ? "bg-gray-700 text-white" : "bg-gray-100"
		  } rounded-lg px-3 py-[10px] flex items-center gap-2`}
		>
		  <SearchOutline color={darkMode ? "#ccc" : "#999"} />
		  <input
			type="text"
			placeholder="Search"
			className={`w-full bg-transparent outline-none text-[15px] ${
			  darkMode ? "placeholder-gray-400 text-white" : "placeholder-gray-600"
			}`}
		  />
		</div>
  
		{/* Ícones de funcionalidades (Compartilhar, Configurações e Notificações) */}
		{/* Visível apenas em telas maiores (oculto em mobile) */}
		<div className="md:flex hidden items-center gap-4">
		  {/* Botão de compartilhamento */}
		  <div
			className={`grid place-items-center ${
			  darkMode ? "bg-gray-700" : "bg-gray-100"
			} rounded-full p-2 cursor-pointer`}
		  >
			<ShareSocialOutline color={darkMode ? "#fff" : "#444"} />
		  </div>
  
		  {/* Botão de configurações */}
		  <div
			className={`grid place-items-center ${
			  darkMode ? "bg-gray-700" : "bg-gray-100"
			} rounded-full p-2 cursor-pointer`}
		  >
			<SettingsOutline color={darkMode ? "#fff" : "#444"} />
		  </div>
  
		  {/* Botão de notificações */}
		  <div
			className={`grid place-items-center ${
			  darkMode ? "bg-gray-700" : "bg-gray-100"
			} rounded-full p-2 cursor-pointer`}
		  >
			<NotificationsOutline color={darkMode ? "#fff" : "#444"} />
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Navbar;
  