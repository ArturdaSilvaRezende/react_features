import { useSidebarMenuContext } from "../../../../../contexts/SidebarContext";

export default function SubItensDropdown({ className }) {
  const { selectedCategory } = useSidebarMenuContext();

  const renderItems = () => {
    switch (selectedCategory) {
      case "processes":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="">Processos Item 1</a>
            <a href="">Processos Item 2</a>
          </div>
        );
      case "models":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="">Modelos Item 1</a>
            <a href="">Modelos Item 2</a>
          </div>
        );
      case "userpermission":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="">Usuários e Permissões 1</a>
            <a href="">Usuários e Permissões 2</a>
          </div>
        );
      case "units":
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href="">Unidades Item 1</a>
            <a href="">Unidades Item 2</a>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className={className}>{renderItems()}</div>;
}
