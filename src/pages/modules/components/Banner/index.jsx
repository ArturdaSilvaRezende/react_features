import BannerIcon from "../../assets/images/modules/banner-icon.png";
import { Banner } from "./styles";

export default function BannerComponent() {
  return (
    <Banner>
      <figcaption className="container">
        <div className="banner__title">
          <img src={BannerIcon} alt="ícone - Vetor" />
          <h1>
            <span>HMO.</span>
            <span>proc</span>
          </h1>
        </div>
        <p className="banner__description">
          Automação inteligente para otimizar e agilizar seus processos,
          garantindo eficiência e fluidez em cada etapa do seu fluxo de
          trabalho.
        </p>
      </figcaption>
    </Banner>
  );
}
