import styled from "styled-components";

export const ForgotPassword = styled.div`
  margin-bottom: 27px;

  .new-password {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin: 37px 0;

    p {
      color: #171425;
      margin-right: 5px;
    }

    a {
      color: #0149fd;
    }
  }
`;

export const CodeInput = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 12px;

  input {
    height: 86px;
    width: 82.5px;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
  }
`;

export const Timer = styled.div`
  button {
    margin: 30px 0 12px 0;
  }

  p {
    color: #7489a6;
    text-align: center;
  }
`;
