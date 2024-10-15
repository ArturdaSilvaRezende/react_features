import { SidebarMenuProvider } from "./contexts/SidebarContext";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <>
      <SidebarMenuProvider>
        <AppRoutes />
      </SidebarMenuProvider>
    </>
  );
}

export default App;
