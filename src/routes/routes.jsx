import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import RcPaginationPage from "../pages/features/pages/RcPagination";
import LoginComponent from "../pages/screen/login";
import Dashboard from "../pages/screen/dashboard";
import Units from "../pages/screen/dashboard/pages/Units";
import UserPermission from "../pages/screen/dashboard/pages/UserPermission";
import Models from "../pages/screen/dashboard/pages/models";
import Processes from "../pages/screen/dashboard/pages/processes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/rcpagination" element={<RcPaginationPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/processes" element={<Processes />} />
        <Route path="/models" element={<Models />} />
        <Route path="/userpermission" element={<UserPermission />} />
        <Route path="/units" element={<Units />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
