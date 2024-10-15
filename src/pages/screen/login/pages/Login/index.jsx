import Layout from "../../layout";
import InputPasswordComponent from "../../components/ui/Input";

export default function LoginPageComponent() {
  return (
    <Layout>
      <div>
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

          <button className="login__submit" type="button">
            Login
          </button>
        </form>

        <a className="login__forgot-password">Esqueceu a senha?</a>
      </div>
    </Layout>
  );
}
