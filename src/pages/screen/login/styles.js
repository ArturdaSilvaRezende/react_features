import styled from "styled-components";
import LoginHeroImage from "../../../assets/images/login/login.png";

export const Login = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginContents = styled.div`
  width: 50%;
  padding: 0 58px;

  .login__brand {
    display: block;
    margin: 0 auto;
  }

  .login__title {
    margin: 10px 0 30px 0;
    text-align: center;

    h1 {
      color: #010647;
      font-size: 24px;
    }

    p {
      color: #7f7f7f;
      font-size: 13px;
      margin-top: 5px;
    }
  }

  .login__form {
    margin: 0 auto;

    .login__form-password {
      position: relative;

      .password__icon {
        position: absolute;
        right: 12px;
        bottom: 5px;
        color: #152132;
        cursor: pointer;
        font-size: 20px;
      }
    }

    .login__form-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;

      label {
        color: #171425;
        font-size: 13px;
        margin-bottom: 5px;
      }

      input,
      select {
        border: 1px solid #bfcde0;
        border-radius: 6px;
        color: #152132;
        padding: 12px 16px 12px 16px;
        outline: none;
      }

      select {
        cursor: pointer;
      }
    }

    .login__submit {
      background-color: #0149fd;
      border-radius: 6px;
      color: #fefcfd;
      padding: 10px 16px 10px 16px;
      margin: 20px 0;
      transition: all ease 0.2s;
      width: 100%;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .login__forgot-password {
    color: #0149fd;
    cursor: pointer;
    display: block;
    font-size: 14px;
    margin: 0 auto;
    transition: all ease 0.2s;
    width: 140px;

    &:hover {
      opacity: 0.8;
    }
  }

  .login__footer {
    color: #bfcde0;
    font-size: 14px;
    text-align: center;
    margin-top: 60px;
  }
`;

export const LoginHero = styled.figure`
  width: 100%;
  height: 100vh;
  background-image: url(${LoginHeroImage});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: ".";
  }
`;
