import styled from "styled-components";
import LoginHeroImage from "../../../../../assets/images/login/login.png";

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
