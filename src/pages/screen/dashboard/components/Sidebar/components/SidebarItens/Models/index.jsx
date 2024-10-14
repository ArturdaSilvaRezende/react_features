import ProcessTypeIcon from "../../../../../../../../assets/images/dashboard/sidebar/process-type-icon.png";

export default function ModelsItens({ className, isToggle }) {
  return (
    <div className={className} $isopen={isToggle}>
      <a href="#">
        <span>
          <img src={ProcessTypeIcon} alt="ícone - modelos" />
        </span>
        <span className="text__toggle" $isopen={isToggle}>
          Modelos
        </span>
      </a>
    </div>
  );
}
