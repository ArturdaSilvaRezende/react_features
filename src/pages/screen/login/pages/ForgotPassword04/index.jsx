import TitleComponent from "../../components/title";
import LoginButtonComponent from "../../components/ui/Button";
import InputPasswordComponent from "../../components/ui/InputPassword";
import LinkBackToLoginComponent from "../../components/ui/LinkBackToLogin";
import Layout from "../../layout";
import { ForgotPassword } from "./styles";

export default function ForgotPassword04() {
  return (
    <Layout>
      <ForgotPassword>
        <TitleComponent
          title="Crie sua Nova Senha"
          subtitle="Preencha os campos abaixo para redefinir sua senha e acessar o sistema."
        />

        <form>
          <InputPasswordComponent label="Senha" />
          <InputPasswordComponent label="Nova Senha" />
          <LoginButtonComponent buttonText="Redefinir Senha" />
        </form>

        <LinkBackToLoginComponent />
      </ForgotPassword>
    </Layout>
  );
}
