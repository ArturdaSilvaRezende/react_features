import { useState } from "react";
import { Login, LoginContents, LoginHero } from "./styles";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Brand from "../../../assets/images/login/brand.png";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Login>
      <LoginContents>
        <img className="login__brand" src={Brand} alt="HMO Proc Logo" />

        <div className="login__title">
          <h1>Seja bem-vindo!</h1>
          <p>Preencha seus dados para realizar o Login</p>
        </div>

        <form className="login__form">
          <div className="login__form-item">
            <label htmlFor="suporte">E-mail ou Usuário</label>
            <input type="text" placeholder="Suporte" id="suporte" />
          </div>

          <div className="login__form-item login__form-password">
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="*****"
              id="password"
              maxLength={35}
            />
            <span
              className="password__icon"
              onClick={handleTogglePasswordVisibility}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

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

        <footer className="login__footer">
          © Copyright 2024 HMO Tecnologia
        </footer>
      </LoginContents>

      <LoginHero></LoginHero>
    </Login>
  );
};

export default LoginComponent;
