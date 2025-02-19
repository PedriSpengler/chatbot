import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  // You can manage the darkMode state here
  const [darkMode] = useState(false); // Set initial state as needed

  return (
    <div className={`w-screen h-screen relative ${darkMode ? "dark" : ""}`}>
      {/* Pass darkMode as a prop to Sidebar */}
      <Sidebar darkMode={darkMode} />
      <Navbar darkMode={darkMode} />
      <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
