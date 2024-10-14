import styled from "styled-components";

export const Title = styled.div`
  margin: ${(props) => (props.$align ? "0 auto" : "0")};

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
`;
