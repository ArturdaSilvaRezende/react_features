import styled from "styled-components";

export const TopbarHeader = styled.header`
  border-bottom: 1px solid #e3edf9;
  font-weight: 400;
  font-size: 13px;
  height: 66px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 32px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: auto;
    padding: 11.5px;
  }

  @media screen and (max-width: 767px) {
    position: relative;
    height: auto;
    padding: 0 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;

    &:first-child {
      nav {
        order: 2;
      }
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 10px 0;

    &:first-child {
      nav {
        order: 2;
      }
    }
  }
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      & + li {
        margin-left: 20px;
      }

      a {
        color: #7489a6;
        transition: all 0.2s ease;

        &:hover {
          opacity: 0.8;
          color: #0149fd;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin: 35px auto 25px 15px;
  }

  @media screen and (max-width: 767px) {
    margin: 25px 0;

    ul {
      flex-direction: column;

      li {
        & + li {
          margin: 15px 0 0 0;
        }
      }
    }
  }
`;

export const BtnControlMenu = styled.button`
  display: none;

  @media screen and (max-width: 992px) {
    display: block;
    position: absolute;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    left: 15px;
    top: 15px;
  }

  @media screen and (max-width: 767px) {
    top: 25px;
    left: 13px;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;

  .user__greeting {
    span {
      &:last-child {
        margin-left: 5px;
        color: #0149fd;
      }
    }
  }

  .user__vertical-line {
    background-color: #bfcde0;
    color: transparent;
    height: 38px;
    margin: 0 20px;
    width: 1px;

    &::after {
      content: " ";
    }
  }

  .user__notifications {
    display: flex;
    align-items: center;

    svg {
      color: #7486a9;
      height: 20px;
      width: 20px;
    }

    .user__bell {
      margin-right: 10px;
    }

    .user__acctount {
      display: flex;
      align-items: center;
      cursor: pointer;

      button {
        margin-right: 5px;
      }
    }
  }

  @media screen and (max-width: 992px) {
    margin-left: auto;
    position: static;
    right: 0;
  }

  @media screen and (max-width: 767px) {
    .user__greeting {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .user__vertical-line {
      margin: 0 20px;
    }
  }
`;
