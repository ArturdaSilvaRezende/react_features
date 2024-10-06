import styled from "styled-components";

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #212121;
  border-right: 2px solid tomato;
  padding: 30px 15px;
  min-height: 100vh;
  width: 250px;

  a {
    color: #fff;

    & + a {
      margin-top: 10px;
    }
  }
`;
