import TitleComponent from "../../components/title";
import TimerComponent from "./timer";
import Layout from "../../layout";
import LinkBackToLoginComponent from "../../components/ui/LinkBackToLogin";
import CodeInputComponent from "./CodeInput";
import { ForgotPassword } from "./styles";
import { useState } from "react";

export default function ForgotPassword03() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(60);

  return (
    <Layout>
      <ForgotPassword>
        <TitleComponent
          title="Informe o código enviado"
          subtitle="Verifique seu e-mail. Enviamos um código de verificação para que você possa redefinir sua senha."
        />
        <form>
          <CodeInputComponent
            setIsButtonDisabled={setIsButtonDisabled}
            timeLeft={timer}
          />
          <TimerComponent
            isButtonDisabled={isButtonDisabled}
            setIsButtonDisabled={setIsButtonDisabled}
          />
        </form>

        <div className="new-password">
          <p>Não recebeu o Código?</p>
          <a href="#">Clique Aqui</a>
        </div>

        <LinkBackToLoginComponent />
      </ForgotPassword>
    </Layout>
  );
}
