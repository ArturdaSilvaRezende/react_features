import SetorIcon from "../../../../../../../../assets/images/dashboard/sidebar/setor-icon.png";
import SubSetorIcon from "../../../../../../../../assets/images/dashboard/sidebar/subsetor-icon.png";
import { Units } from "./styles";

export default function UnitsItens({ className, isToggle }) {
  return (
    <Units>
      <div className={className} $isopen={isToggle}>
        <a href="#">
          <span>
            <img src={SetorIcon} alt="ícone - tipos de processos" />
          </span>
          <span className="text__toggle" $isopen={isToggle}>
            Setores
          </span>
        </a>
      </div>

      <div className={className}>
        <a href="#">
          <span>
            <img src={SubSetorIcon} alt="ícone - processos" />
          </span>
          <span className="text__toggle" $isopen={isToggle}>
            Subsetores
          </span>
        </a>
      </div>
    </Units>
  );
}
