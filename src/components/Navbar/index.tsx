import {
	ChevronDown,
	NotificationsOutline,
	PersonCircle,
	SearchOutline,
	SettingsOutline,
	ShareSocialOutline,
  } from "react-ionicons";
  
  const Navbar = ({ darkMode }: { darkMode: boolean }) => {
	return (
	  <div
		className={`md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b ${
		  darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-slate-300 bg-white"
		}`}
	  >
		<div className="flex items-center gap-3 cursor-pointer">
		  <PersonCircle color={darkMode ? "#fff" : "#000"} width={"28px"} height={"28px"} />
		  <span className="text-blue-400 font-semibold md:text-lg text-sm whitespace-nowrap">
			Gustavo Zapperini
		  </span>
		  <ChevronDown color={darkMode ? "#fff" : "#000"} width={"16px"} height={"16px"} />
		</div>
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
		<div className="md:flex hidden items-center gap-4">
		  <div
			className={`grid place-items-center ${
			  darkMode ? "bg-gray-700" : "bg-gray-100"
			} rounded-full p-2 cursor-pointer`}
		  >
			<ShareSocialOutline color={darkMode ? "#fff" : "#444"} />
		  </div>
		  <div
			className={`grid place-items-center ${
			  darkMode ? "bg-gray-700" : "bg-gray-100"
			} rounded-full p-2 cursor-pointer`}
		  >
			<SettingsOutline color={darkMode ? "#fff" : "#444"} />
		  </div>
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
  