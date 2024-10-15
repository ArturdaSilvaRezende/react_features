import styled from "styled-components";

export const InputPassword = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;

  label {
    color: #171425;
    font-size: 13px;
    margin-bottom: 5px;
  }

  span {
    position: absolute;
    right: 12px;
    bottom: 5px;
    color: #152132;
    cursor: pointer;
    font-size: 20px;
  }
`;
