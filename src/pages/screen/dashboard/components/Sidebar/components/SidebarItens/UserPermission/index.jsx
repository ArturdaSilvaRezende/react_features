import UserPermissionIcon from "../../../../../../../../assets/images/dashboard/sidebar/user-permission-icon.png";

export default function UserPermissionItens({ className, isToggle }) {
  return (
    <div className={className} $isopen={isToggle}>
      <a href="#">
        <span>
          <img src={UserPermissionIcon} alt="ícone - Usuários e Permissões" />
        </span>
        <span className="text__toggle" $isopen={isToggle}>
          Usuários
        </span>
      </a>
    </div>
  );
}
