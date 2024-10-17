import { useState, useEffect } from "react";
import LoginButtonComponent from "../../components/ui/Button";
import { Timer } from "./styles";

export default function TimerComponent({
  isButtonDisabled,
  setIsButtonDisabled,
}) {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsButtonDisabled(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const displaySeconds = sec % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      displaySeconds < 10 ? "0" : ""
    }${displaySeconds}`;
  };

  return (
    <Timer>
      <LoginButtonComponent
        isButtonDisabled={isButtonDisabled}
        buttonText="Continuar"
      />

      {isButtonDisabled && <p>{formatTime(timer)}</p>}
    </Timer>
  );
}
