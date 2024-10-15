import { useState, useEffect } from "react";

const ResendTimer = () => {
  const [timer, setTimer] = useState(59);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Ativa o timer quando a contagem está em andamento
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsButtonDisabled(false); // Habilita o botão ao final do timer
      clearInterval(interval);
    }
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [timer]);

  const handleResendClick = () => {
    setIsButtonDisabled(true);
    setTimer(59); // Reinicia o timer para 59 segundos
  };

  return (
    <div>
      <button onClick={handleResendClick} disabled={isButtonDisabled}>
        Reenviar senha
      </button>
      {isButtonDisabled && (
        <p>Por favor, aguarde {timer} segundos para reenviar a senha.</p>
      )}
    </div>
  );
};

export default ResendTimer;
