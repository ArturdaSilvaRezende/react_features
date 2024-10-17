import ProcessDocument from "../../../assets/images/modules/process_document.png";
import GearIcon from "../../../assets/images/modules/gear.png";
import DocumentIcon from "../../../assets/images/modules/document.png";
import ClickToAccessComponent from "../ui/ClickToAccess";
import { ModulesCard } from "./styles";

export default function ModulesCardsComponent() {
  return (
    <ModulesCard>
      <div className="card__image">
        <img src={ProcessDocument} alt="Processos e Documentos" />
      </div>

      <div className="card_description-box">
        <div className="card__description">
          <h3>Processos e Documentos</h3>
          <p>
            Gestão de processos e documentos para otimizar fluxos de trabalho e
            garantir eficiência e segurança.
          </p>
        </div>

        <div className="card__modules-contents">
          <div className="card__modules-contents__item">
            <span>
              <img src={GearIcon} alt="ícone - gear" />
            </span>
            <p>24 processos</p>
          </div>

          <div className="card__modules-contents__item">
            <span>
              <img src={DocumentIcon} alt="ícone - document" />
            </span>
            <p>32 documentos</p>
          </div>
        </div>

        <ClickToAccessComponent />
      </div>
    </ModulesCard>
  );
}
