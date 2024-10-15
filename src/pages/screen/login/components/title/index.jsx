import Brand from "../../../../../assets/images/login/brand.png";
import { Title } from "./styles";

export default function TitleComponent(title, subtitle) {
  return (
    <Title>
      <img src={Brand} alt="Logo HMO Proc" />
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </Title>
  );
}
