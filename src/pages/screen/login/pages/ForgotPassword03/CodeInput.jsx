import { useEffect, useState } from "react";
import { CodeInput } from "./styles";

export default function CodeInputComponent({ setIsButtonDisabled, timeLeft }) {
  const [code, setCode] = useState(Array(4).fill(""));

  const handleChangeValueInput = (e, index) => {
    const { value } = e.target;

    if (/^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        e.target.nextSibling.focus();
      }
    }
  };

  const handleKeyDown = async (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      e.target.previousSibling.focus();
    } else if (e.key === "Tab") {
      e.preventDefault();
      const nextIndex = index + (e.shiftKey ? -1 : 1);
      if (nextIndex >= 0 && nextIndex < code.length) {
        document.querySelectorAll("input")[nextIndex].focus();
      }
    }

    if (e.ctrlKey && e.key === "v") {
      e.preventDefault();
      try {
        const text = await navigator.clipboard.readText();
        const digits = text.match(/\d/g);

        if (digits && digits.length === 4) {
          setCode(digits);
        }
      } catch (error) {
        console.error("Erro ao ler a área de transferência: ", error);
      }
    }
  };

  useEffect(() => {
    setIsButtonDisabled(code.some((value) => value === "") || timeLeft === 0);
  }, [code, timeLeft]);

  return (
    <CodeInput>
      {code.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength="1"
          onChange={(e) => handleChangeValueInput(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            border: value ? "1px solid #1652EB" : "1px solid #bfcde0",
          }}
        />
      ))}
    </CodeInput>
  );
}
