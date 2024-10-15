import { LoginButton } from "./styles";

export default function LoginButtonComponent({ buttonText, isButtonDisabled }) {
  return (
    <LoginButton type="button" disabled={isButtonDisabled}>
      {buttonText}
    </LoginButton>
  );
}
