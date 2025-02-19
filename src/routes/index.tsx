// Importando os tipos necessários e os componentes de layout e páginas
import { RouteObject } from "react-router"; // Importando o tipo RouteObject de 'react-router' para tipagem das rotas
import Layout from "../layout"; // Importando o componente Layout que será usado para envolver as páginas
import Boards from "../pages/Boards"; // Importando a página Boards para exibição na rota principal

// Definindo o array de rotas
const routes: RouteObject[] = [
	{
		// A primeira rota é a raiz ("/") e utiliza o Layout como elemento principal
		path: "/", // Caminho da rota
		element: <Layout />, // Componente Layout que envolve as páginas dentro dele
		children: [
			{
				// Definindo as rotas filhas dentro do Layout
				children: [
					{
						// Esta é a rota principal da aplicação
						path: "", // Caminho vazio, o que significa que será a rota principal quando o usuário acessar "/"
						element: <Boards />, // Componente Boards será renderizado para esta rota
					},
				],
			},
		],
	},
];

// Exportando as rotas para serem usadas no roteador da aplicação
export default routes;
