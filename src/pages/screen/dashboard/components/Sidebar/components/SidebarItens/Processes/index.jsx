import ProcessTypeIcon from "../../../../../../../../assets/images/dashboard/sidebar/process-type-icon.png";
import ProcessIcon from "../../../../../../../../assets/images/dashboard/sidebar/process-icon.png";
import { Processes } from "./styles";

export default function ProcessesItens({ className, isToggle }) {
  return (
    <Processes>
      <div className={className} $isopen={isToggle}>
        <a href="#">
          <span>
            <img src={ProcessTypeIcon} alt="ícone - tipos de processos" />
          </span>
          <span className="text__toggle" $isopen={isToggle}>
            Tipos de Processos
          </span>
        </a>
      </div>

      <div className={className}>
        <a href="#">
          <span>
            <img src={ProcessIcon} alt="ícone - processos" />
          </span>
          <span className="text__toggle" $isopen={isToggle}>
            Processos
          </span>
        </a>
      </div>
    </Processes>
  );
}
