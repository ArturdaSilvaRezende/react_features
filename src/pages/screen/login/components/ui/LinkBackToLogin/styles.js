import styled from "styled-components";

export const LinkBackToLogin = styled.div`
  margin-top: 6px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0149fd;
    transition: all 0.2s ease-in;

    &:hover {
      opacity: 0.8;
    }

    span {
      margin-left: 6px;
    }
  }
`;
