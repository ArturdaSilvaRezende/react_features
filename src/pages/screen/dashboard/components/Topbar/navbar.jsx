import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSidebarMenuContext } from "../../../../../contexts/SidebarContext";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Navbar, BtnControlMenu } from "./styles";
import "../../../../../styles/animations.css";

export default function NavbarComponent() {
  const [isToggleMenu, setIsToggleMenu] = useState(false);
  const { selectedCategory, setSelectedCategory } = useSidebarMenuContext();

  const haddleToggleMenu = () => {
    setIsToggleMenu(!isToggleMenu);
  };

  const handleToggleMenuResize = () => {
    setIsToggleMenu(window.innerWidth >= 992);
  };

  useEffect(() => {
    handleToggleMenuResize();
    window.addEventListener("resize", handleToggleMenuResize);

    return () => {
      window.removeEventListener("resize", handleToggleMenuResize);
    };
  }, []);

  return (
    <>
      <BtnControlMenu onClick={haddleToggleMenu}>
        {!isToggleMenu ? <FaBars /> : <IoCloseSharp />}
      </BtnControlMenu>

      {isToggleMenu && (
        <Navbar className="fadeIn">
          <ul>
            <li>
              <Link
                to="/processes"
                onClick={() => setSelectedCategory("processes")}
                className={selectedCategory === "processes" ? "active" : ""}
              >
                Processos
              </Link>
            </li>

            <li>
              <Link
                to="/models"
                onClick={() => setSelectedCategory("models")}
                className={selectedCategory === "models" ? "active" : ""}
              >
                Modelos
              </Link>
            </li>

            <li>
              <Link
                to="/userpermission"
                onClick={() => setSelectedCategory("userpermission")}
                className={
                  selectedCategory === "userpermission" ? "active" : ""
                }
              >
                Usuários e Permissões
              </Link>
            </li>

            <li>
              <Link
                to="/units"
                onClick={() => setSelectedCategory("units")}
                className={selectedCategory === "units" ? "active" : ""}
              >
                Unidades
              </Link>
            </li>
          </ul>
        </Navbar>
      )}
    </>
  );
}
