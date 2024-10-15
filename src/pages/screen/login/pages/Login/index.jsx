import Layout from "../../layout";
import InputPasswordComponent from "../../components/ui/InputPassword";
import TitleComponent from "../../components/title";
import LoginButtonComponent from "../../components/ui/Button";
import { LoginPage } from "./styles";

export default function LoginPageComponent() {
  return (
    <Layout>
      <LoginPage>
        <TitleComponent
          title="Seja bem-vindo!"
          subtitle="Preencha seus dados para realizar o Login"
          $text_align="center"
          $margin_align="0 auto"
          $margin_bottom="0"
        />
        <form className="login__form">
          <div className="login__form-item">
            <label htmlFor="suporte">E-mail ou Usuário</label>
            <input type="text" placeholder="Suporte" id="suporte" />
          </div>

          <InputPasswordComponent />

          <div className="login__form-item">
            <label htmlFor="unidade">Unidade</label>
            <select id="unidade">
              <option>Nome da Unidade</option>
            </select>
          </div>

          <LoginButtonComponent buttonText="Login" />
        </form>

        <a className="login__forgot-password">Esqueceu a senha?</a>
      </LoginPage>
    </Layout>
  );
}
