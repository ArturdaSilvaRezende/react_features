import styled from "styled-components";

export const LoginButton = styled.button`
  background-color: #0149fd;
  border-radius: 6px;
  color: #fefcfd;
  padding: 10px 16px 10px 16px;
  margin: 20px 0;
  transition: all ease 0.2s;
  width: 100%;

  &:disabled {
    background-color: #e3edf9;
    color: #546984;
    font-weight: 600;
  }

  &:hover {
    opacity: 0.8;
  }
`;
