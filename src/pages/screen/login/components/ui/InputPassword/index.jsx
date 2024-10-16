import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { InputPassword } from "./styles";

export default function InputPasswordComponent({ label }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputPassword>
      <label htmlFor="password">{label}</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="*****"
        id="password"
        maxLength={35}
      />
      <span onClick={handleTogglePasswordVisibility}>
        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
      </span>
    </InputPassword>
  );
}
