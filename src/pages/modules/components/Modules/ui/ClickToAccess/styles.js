import styled from "styled-components";

export const ClickToAccess = styled.a`
  color: #0149fd;
  font-size: 12px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  img {
    margin-left: 10px;
  }
`;
