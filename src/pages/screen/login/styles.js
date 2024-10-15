import styled from "styled-components";

export const Login = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LoginContents = styled.div`
  width: 50%;
  padding: 0 58px;

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

  label {
    color: #171425;
    font-size: 13px;
    margin-bottom: 5px;
  }
`;
