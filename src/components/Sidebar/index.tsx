import {
	AppsOutline,
	GridOutline,
	HomeOutline,
	LogOutOutline,
	NotificationsOutline,
	PeopleOutline,
	PieChartOutline,
} from "react-ionicons";

const Sidebar = ({ darkMode }: { darkMode: boolean }) => {
	const navLinks = [
		{
			title: "Início",
			icon: (
				<HomeOutline
					color={darkMode ? "#fff" : "#555"}
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Quadros",
			icon: (
				<AppsOutline
					color={darkMode ? "#fff" : "#555"}
					width="22px"
					height="22px"
				/>
			),
			active: true,
		},
		{
			title: "Projetos",
			icon: (
				<GridOutline
					color={darkMode ? "#fff" : "#555"}
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Análises",
			icon: (
				<PieChartOutline
					color={darkMode ? "#fff" : "#555"}
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Fluxos",
			icon: (
				<PeopleOutline
					color={darkMode ? "#fff" : "#555"}
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
		{
			title: "Notificações",
			icon: (
				<NotificationsOutline
					color={darkMode ? "#fff" : "#555"}
					width="22px"
					height="22px"
				/>
			),
			active: false,
		},
	];

	return (
		<div
			className={`fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col z-10
			 ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-slate-300"} border-r`}
		>
			<div
				className={`w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] 
				 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
			>
				<span className="font-semibold text-2xl md:block hidden">Chat</span>
				<span className="text-blue-400 font-semibold text-2xl md:block hidden">BOT</span>
			</div>

			<div className="w-full h-[calc(100vh-70px)] flex flex-col md:items-start items-center gap-2 py-5 md:px-3 px-3 relative">
				{navLinks.map((link) => {
					return (
						<div
							key={link.title}
							className={`flex items-center gap-2 w-full rounded-lg hover:bg-blue-400 px-2 py-3 cursor-pointer 
								${link.active ? "bg-blue-400 text-white" : darkMode ? "bg-gray-800 text-gray-300" : "bg-transparent text-black"}`}
						>
							{link.icon}
							<span className="font-medium text-[15px] md:block hidden">{link.title}</span>
						</div>
					);
				})}
				<div
					className={`flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-blue-400 px-2 py-3 cursor-pointer 
						${darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-black"}`}
				>
					<LogOutOutline color={darkMode ? "#fff" : "#555"} />
					<span className="font-medium text-[15px] md:block hidden">Log Out</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
