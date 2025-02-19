// Importando os hooks e componentes necessários para o layout
import { useState } from "react";
import { Outlet } from "react-router"; // Componente responsável por renderizar os componentes de rota
import Sidebar from "../components/Sidebar"; // Barra lateral
import Navbar from "../components/Navbar"; // Barra de navegação superior

const Layout = () => {
  // Hook para controlar o estado do modo escuro (dark mode)
  const [darkMode] = useState(false); // Estado inicial é definido como falso (modo claro)

  return (
    // Contêiner principal do layout, com largura e altura de tela cheia. A classe `dark` é aplicada condicionalmente com base no estado `darkMode`
    <div className={`w-screen h-screen relative ${darkMode ? "dark" : ""}`}>
      
      {/* Sidebar, passando o estado de darkMode como prop */}
      <Sidebar darkMode={darkMode} />
      
      {/* Navbar, também com a prop darkMode */}
      <Navbar darkMode={darkMode} />
      
      {/* Área principal do conteúdo, que se ajusta dependendo do modo de navegação (responsividade com o padding) */}
      <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
        {/* Componente Outlet, onde o conteúdo das rotas será renderizado */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
