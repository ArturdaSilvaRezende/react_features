import TitleComponent from "../../components/title";
import Layout from "../../layout";
import LoginButtonComponent from "../../components/ui/Button";
import OutLineImage from "../../../../../assets/images/login/outline_III.png";
import { ForgotPassword } from "./styles";

export default function ForgotPassword02() {
  return (
    <Layout>
      <ForgotPassword>
        <TitleComponent
          title="Enviamos um Código para seu E-mail"
          subtitle="Verifique sua caixa de entrada. Enviamos um código para ajudá-lo a redefinir sua senha."
        />
        <form>
          <img src={OutLineImage} alt="Outline - image" />
          <LoginButtonComponent buttonText="Continuar" />
        </form>
      </ForgotPassword>
    </Layout>
  );
}
