import styled from "styled-components";

export const LoginPage = styled.div`
  .login__form {
    margin: 0 auto;

    .login__form-item {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
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
`;
