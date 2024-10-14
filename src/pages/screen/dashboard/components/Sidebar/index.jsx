import { useState, ref, useRef } from "react";
import Brand from "../../../../../assets/images/dashboard/sidebar/brand.png";
import SidebarIconMenu from "../../../../../assets/images/dashboard/sidebar/sidebar-icon-menu.png";
import DashboardIcon from "../../../../../assets/images/dashboard/sidebar/dashboard-icon.png";
import ModulesIcon from "../../../../../assets/images/dashboard/sidebar/modules-icon.png";
import { Sidebar } from "./styles";
import "../../../../../styles/animations.css";
import SubItensDropdown from "./SubItensDropdown";
import SidebarItens from "./SidebarItens";

export function SidebarMenuComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handletoggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Sidebar $isopen={isSidebarOpen}>
      <div className="sidebar__header" $isopen={isSidebarOpen}>
        <a href="#">
          <img src={Brand} alt="HMO Proc - logo dashboard" />
        </a>

        <button className="sidebar__header__btn" onClick={handleToggleSidebar}>
          <img src={SidebarIconMenu} alt="Icon menu" />
        </button>
      </div>

      <div className="sidebar__container">
        <div className="sidebar__dropdown">
          <button
            className="sidebar__dropdown__btn"
            $isopen={isSidebarOpen}
            onClick={handletoggleDropdown}
          >
            <span>
              <img src={DashboardIcon} alt="Dashboard Ícone" />
            </span>

            <span className="text__toggle" $isopen={isSidebarOpen}>
              Dashboard
            </span>
          </button>

          {isOpen && (
            <SubItensDropdown className="sidebar__dropdown__routes fadeIn" />
          )}
        </div>

        <SidebarItens className="sidebar__item" isToggle={isSidebarOpen} />

        <button className="sidebar__back-modules" $isopen={isSidebarOpen}>
          <span>
            <img src={ModulesIcon} alt="ícone - voltar aos módulos" />
          </span>
          <span className="text__toggle" $isopen={isSidebarOpen}>
            Voltar aos Módulos
          </span>
        </button>
      </div>
    </Sidebar>
  );
}
