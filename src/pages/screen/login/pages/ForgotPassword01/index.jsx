import TitleComponent from "../../components/title";
import LoginButtonComponent from "../../components/ui/Button";
import LinkBackToLoginComponent from "../../components/ui/LinkBackToLogin";
import Layout from "../../layout";
import { ForgotPassword } from "./styles";

export default function ForgotPassword01() {
  return (
    <Layout>
      <ForgotPassword>
        <TitleComponent
          title="Esqueceu a Senha?"
          subtitle="Sem problema, siga o passo a passo para ajudarmos a redefinir sua senha, informe seu e-mail"
          $margin_bottom="0"
        />

        <form className="forgot-password__form">
          <div className="forgot-password__form__form-item">
            <label htmlFor="suporte">E-mail ou Usuário</label>
            <input type="text" placeholder="Suporte" id="suporte" />
          </div>
          <LoginButtonComponent buttonText="Enviar" />
        </form>

        <LinkBackToLoginComponent />
      </ForgotPassword>
    </Layout>
  );
}
