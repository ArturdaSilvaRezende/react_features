import styled from "styled-components";

export const Overlay = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 85px;
  right: 20px;
  background-color: #fff;
  border: 0.5px solid #e3edf9;
  border-radius: 6px;
  font-size: 13px;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  width: 544px;
  z-index: 998;

  &::-webkit-scrollbar {
    width: 4px;
    height: 43px;
  }

  &::-webkit-scrollbar-thumb {
    background: #e3edf9;
    border-radius: 400px;
  }

  .modal__title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e3edf9;
    padding: 20px 24px;

    .modal__title__notification {
      display: flex;
      align-items: center;

      .modal__title__notification-icon {
        border: 0.5px solid #bfcde0;
        border-radius: 6px;
        margin-right: 10px;
        height: 40px;
        position: relative;
        width: 40px;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      p {
        font-weight: 600;
      }
    }
  }

  .modal__contents {
    .modal__news {
      display: flex;
      justify-content: space-between;
      padding: 24px;

      & + .modal__news {
        border-top: 1px solid #e3edf9;
      }

      .modal__news-item {
        p {
          &:first-child {
            color: #152132;
            font-weight: 400;
          }

          &:last-child {
            color: #546984;
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }

      .modal__news-notification {
        display: flex;
        align-items: center;

        p {
          color: #667fa1;
          margin-right: 5px;
        }

        span {
          background-color: #ef4e4e;
          border-radius: 50%;
          height: 9px;
          width: 9px;
          position: relative;
          top: -0.5px;
        }
      }
    }

    .modal__date {
      display: flex;
      align-items: center;
      padding: 15px 0 15px 0;

      span {
        background-color: #e3edf9;
        display: inline-block;
        height: 2px;
        width: 34.8%;

        &::after {
          content: " ";
        }
      }

      p {
        color: #0149fd;
        margin: 0 20px;
        width: 123px;
      }
    }

    .modal__old-notifications {
      .modal__old-notifications__item {
        border-bottom: 1px solid #e3edf9;
        padding: 24px;

        p {
          &:first-child {
            color: #152132;
            font-weight: 400;
          }

          &:last-child {
            color: #546984;
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
    }

    .modal__mark-as-read {
      padding: 12px 24px;

      button {
        border: 1px solid #bfcde0;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 16px;
        width: 100%;

        span {
          color: #7489a6;
          font-weight: 600;
          margin-right: 10px;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    right: 10px;
    top: 75px;
    height: 70vh;
    width: 500px;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;

    .modal__contents {
      padding-bottom: 10px;

      .modal__date {
        span {
          width: 100%;
        }

        p {
          font-size: 12px;
          min-width: 120px;
        }
      }
    }
  }
`;
