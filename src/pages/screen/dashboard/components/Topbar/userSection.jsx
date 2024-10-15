import { useState } from "react";
import ModalComponent from "../Modal";
import { GoBell } from "react-icons/go";
import { FaBell } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import NotifyIcon from "../../../../../assets/images/dashboard/topbar/notify-icon.png";
import ChevronIcon from "../../../../../assets/images/dashboard/topbar/chevron-icon.png";
import UserImage from "../../../../../assets/images/dashboard/topbar/user.png";
import { UserSection } from "./styles";

export default function UserSectionComponent() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    if (isOpenModal === false) {
      setIsOpenModal(true);
    }
  };
  return (
    <UserSection>
      <p className="user__greeting">
        <span>Olá,</span>
        <span>Amanda!</span>
      </p>

      <span className="user__vertical-line"></span>

      <div className="user__notifications">
        <button className="user__bell" onClick={handleOpenModal}>
          {isOpenModal ? <FaBell /> : <GoBell />}
          {/* <img src={NotifyIcon} alt="Ícone das notificações" /> */}
        </button>
        <div className="user__acctount">
          <button>{isOpenModal ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
          <img src={UserImage} alt="Imagem do Usuário" />
        </div>
      </div>

      {isOpenModal && (
        <ModalComponent
          isCloseModal={isOpenModal}
          setIsCloseModal={setIsOpenModal}
        />
      )}
    </UserSection>
  );
}
