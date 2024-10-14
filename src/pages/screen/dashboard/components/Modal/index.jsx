import { Modal, Overlay } from "./styles";
import NotifyIcon from "../../../../../assets/images/dashboard/modal/notify-icon.png";
import CloseIcon from "../../../../../assets/images/dashboard/modal/close-icon.png";
import OkIcon from "../../../../../assets/images/dashboard/modal/ok-icon.png";
import "../../../../../styles/animations.css";
import { useEffect, useState } from "react";

export default function ModalComponent({ isCloseModal, setIsCloseModal }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDatas() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        if (!res.ok) {
          throw new Error("Erro ao carregar");
        }

        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getDatas();
  }, []);

  const handleCloseModal = () => {
    if (isCloseModal === true) {
      setIsCloseModal(false);
    }
  };
  return (
    <Overlay>
      <Modal className="fadeIn">
        <div className="modal__title">
          <div className="modal__title__notification">
            <div className="modal__title__notification-icon">
              <img src={NotifyIcon} alt="ícone de notificação" />
            </div>

            <p>Notificações</p>
          </div>

          <button onClick={handleCloseModal}>
            <img
              src={CloseIcon}
              alt="ícone de fechar o modal de notificações"
            />
          </button>
        </div>

        <div className="modal__contents">
          {todos.map((item) => (
            <div className="modal__news" key={item.id}>
              <div className="modal__news-item">
                <p>{item.title}</p>
                <p>{item.title}</p>
              </div>
              <div className="modal__news-notification">
                <p>Nova</p>
                <span></span>
              </div>
            </div>
          ))}

          <div className="modal__date">
            <span></span>
            <p>07 Setembro 2023</p>
            <span></span>
          </div>

          <div className="modal__old-notifications">
            <div className="modal__old-notifications__item">
              <p>O documento foi assinado com sucesso</p>
              <p>08 Setembro 2023 - 19:30</p>
            </div>

            <div className="modal__old-notifications__item">
              <p>O documento foi assinado com sucesso</p>
              <p>08 Setembro 2023 - 19:30</p>
            </div>
          </div>

          <div className="modal__mark-as-read">
            <button>
              <span>Marcar como Lidas</span>
              <img src={OkIcon} alt="ícone de OK" />
            </button>
          </div>
        </div>
      </Modal>
    </Overlay>
  );
}
