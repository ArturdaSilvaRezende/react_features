import Brand from "../../../../../assets/images/login/brand.png";
import { Title } from "./styles";

export default function TitleComponent({
  title,
  subtitle,
  $text_align,
  $margin_align,
  $margin_bottom,
}) {
  return (
    <Title
      $text_align={$text_align}
      $margin_align={$margin_align}
      $margin_bottom={$margin_bottom}
    >
      <img src={Brand} alt="Logo HMO Proc" />
      <div className="title__container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </Title>
  );
}
