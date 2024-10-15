import { SidebarMenuComponent } from "../Sidebar";
import Topbar from "../Topbar";
import { DashboardLayout, MainContent } from "./styles";

export function DashboardLayoutComponent({ children }) {
  return (
    <DashboardLayout>
      <SidebarMenuComponent />
      <MainContent>
        <Topbar />
        <main>{children}</main>
      </MainContent>
    </DashboardLayout>
  );
}
