import { Link } from "react-router-dom";
import ChevronFowardIcon from "../../../../../../assets/images/login/chevron-foward-icon.png";
import { LinkBackToLogin } from "./styles";

export default function LinkBackToLoginComponent() {
  return (
    <LinkBackToLogin>
      <Link to="/login">
        <img src={ChevronFowardIcon} alt="Ícone - Chevron Foward" />
        <span>Voltar ao Login</span>
      </Link>
    </LinkBackToLogin>
  );
}
