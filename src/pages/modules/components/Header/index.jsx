import { GoBell } from "react-icons/go";
import { FaBell } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Brand from "../../assets/images/modules/brand.png";
import UserImage from "../../assets/images/modules/user.png";
import { Header } from "./styles";

export default function HeaderComponent() {
  return (
    <Header>
      <div className="container">
        <a href="#" className="header__brand">
          <img src={Brand} alt="Logotipo - Hmoproc" />
        </a>

        <div className="header__account">
          <p className="header__account__greeting">
            <span>Olá,</span>
            <span>Amanda!</span>
          </p>

          <span className="vertical-line"></span>

          <div className="header__account__notifications">
            <button className="header__account_bell-icon">
              <GoBell />
            </button>
            <div className="header__account__user">
              <button>
                <IoIosArrowUp />
              </button>
              <img src={UserImage} alt="Imagem do Usuário" />
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}
