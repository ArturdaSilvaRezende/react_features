import styled from "styled-components";

export const Sidebar = styled.aside`
  border-right: 1px solid #e3edf9;
  position: relative;
  min-height: 100vh;
  transition: width 0.3s ease-in-out;
  width: ${({ $isopen }) => ($isopen ? "7%" : "255px")};

  .sidebar__header {
    display: flex;
    justify-content: space-between;
    flex-direction: ${({ $isopen }) => ($isopen ? "column" : "row")};
    align-items: center;
    border-bottom: 1px solid #e3edf9;
    height: ${({ $isopen }) => ($isopen ? "auto" : "66px")};
    padding: ${({ $isopen }) => ($isopen ? "15px 12px" : "0 12px")};
    width: ${({ $isopen }) => ($isopen ? "auto" : "100%")};

    a {
      img {
        width: ${({ $isopen }) => ($isopen ? "100%" : "auto")};
      }
    }

    .sidebar__header__btn {
      border: 0.5px solid #e3edf9;
      border-radius: 6px;
      height: 34px;
      width: 34px;

      img {
        position: relative;
        top: 2px;
        height: 18px;
        width: 18px;
      }
    }
  }

  .sidebar__container {
    margin: 15px auto 0 auto;
    width: 90%;

    .text__toggle {
      display: ${({ $isopen }) => ($isopen ? "none" : "block")};
    }

    .sidebar__dropdown {
      position: relative;
      margin-bottom: 20px;

      .sidebar__dropdown__btn {
        display: flex;
        justify-content: start;
        align-items: center;
        background-color: #0149fd;
        border-radius: 6px;
        padding: ${({ $isopen }) => ($isopen ? "4px 10px" : "16px 12px")};
        width: ${({ $isopen }) => ($isopen ? "auto" : "100%")};
        margin: ${({ $isopen }) => ($isopen ? "0 auto" : "0")};

        span {
          &:first-child {
            margin-top: 3px;
          }

          &:last-child {
            color: #e3edf9;
            font-size: 13px;
            font-weight: 700;
            margin: 0 0 2px 10px;
          }
        }
      }

      .sidebar__dropdown__routes {
        display: flex;
        flex-direction: column;
        margin: 15px 0 0 40px;

        a {
          color: #7489a6;
          font-size: 13px;

          & + a {
            margin-top: 16px;
          }
        }
      }
    }

    .sidebar__item {
      display: flex;
      align-items: center;
      justify-content: ${({ $isopen }) => ($isopen ? "center" : "start")};
      text-align: center;

      & + .sidebar__item {
        margin-top: 35px;
      }

      a {
        display: flex;
        align-items: center;
        color: #667fa1;
        font-size: 13px;
        font-weight: 400;
        margin-left: ${({ $isopen }) => ($isopen ? "0px" : "10px")};

        span {
          &:last-child {
            margin: 0 0 2.5px 10px;
          }
        }
      }
    }

    .sidebar__back-modules {
      border: 1px solid #e3edf9;
      border-radius: 6px;
      padding: 8px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 20px;
      width: ${({ $isopen }) => ($isopen ? "auto" : "171px")};
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        padding-top: 5px;

        &:last-child {
          color: #000000;
          font-size: 13px;
          font-weight: 400;
          margin: 0 0 1px 10px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    width: ${({ $isopen }) => (!$isopen ? "20%" : "255px")};

    .sidebar__header {
      flex-direction: column;
      height: auto;
      padding: 15px 12px;

      a {
        img {
          width: 60px;
        }
      }

      .sidebar__header__btn {
        margin-top: 5px;
      }
    }

    .sidebar__container {
      .text__toggle {
        display: ${({ $isopen }) => (!$isopen ? "none" : "block")};
      }

      .sidebar__dropdown {
        .sidebar__dropdown__btn {
          padding: 10px;
          width: auto;
          margin: 0 auto;

          img {
            position: relative;
            top: 2px;
          }
        }

        .sidebar__dropdown__routes {
          text-align: center;
          margin: 15px 0 0 0;
        }
      }

      .sidebar__item {
        justify-content: center;

        a {
          margin-left: 0;

          span {
            &:last-child {
              margin: ${({ $isopen }) =>
                $isopen ? "0 0 2.5px 10px" : "0 0 2.5px 0"};
            }
          }
        }
      }

      .sidebar__back-modules {
        width: ${({ $isopen }) => ($isopen ? "90%" : "auto")};

        span {
          &:last-child {
            color: #000000;
            font-size: 10px;
            font-weight: 400;
            margin: 0 0 1px 10px;
          }
        }
      }
    }
  }
`;
