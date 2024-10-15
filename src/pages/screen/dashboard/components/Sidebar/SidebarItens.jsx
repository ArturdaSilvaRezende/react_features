import { useSidebarMenuContext } from "../../../../../contexts/SidebarContext";
import ModelsItens from "./components/SidebarItens/Models";
import ProcessesItens from "./components/SidebarItens/Processes";
import UnitsItens from "./components/SidebarItens/Units";
import UserPermissionItens from "./components/SidebarItens/UserPermission";

export default function SidebarItens({ className, isToggle }) {
  const { selectedCategory } = useSidebarMenuContext();

  const renderItems = () => {
    switch (selectedCategory) {
      case "processes":
        return <ProcessesItens className={className} isToggle={isToggle} />;
      case "models":
        return <ModelsItens className={className} isToggle={isToggle} />;
      case "userpermission":
        return (
          <UserPermissionItens className={className} isToggle={isToggle} />
        );
      case "units":
        return <UnitsItens className={className} isToggle={isToggle} />;
      default:
        return null;
    }
  };

  return <div className={className}>{renderItems()}</div>;
}
