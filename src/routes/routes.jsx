import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import RcPaginationPage from "../pages/features/pages/RcPagination";
import ResendTimer from "../components/features/timer";
import LoginComponent from "../pages/screen/login";
import Dashboard from "../pages/screen/dashboard";
import Units from "../pages/screen/dashboard/pages/Units";
import UserPermission from "../pages/screen/dashboard/pages/UserPermission";
import Models from "../pages/screen/dashboard/pages/Models";
import Processes from "../pages/screen/dashboard/pages/Processes";
import ForgotPassword01 from "../pages/screen/login/pages/ForgotPassword01";
import ForgotPassword02 from "../pages/screen/login/pages/ForgotPassword02";
import ForgotPassword03 from "../pages/screen/login/pages/ForgotPassword03";
import ForgotPassword04 from "../pages/screen/login/pages/ForgotPassword04";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* features */}
        <Route path="/rcpagination" element={<RcPaginationPage />} />
        <Route path="/timer" element={<ResendTimer />} />

        {/* login */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/forgotpassword01" element={<ForgotPassword01 />} />
        <Route path="/forgotpassword02" element={<ForgotPassword02 />} />
        <Route path="/forgotpassword03" element={<ForgotPassword03 />} />
        <Route path="/forgotpassword04" element={<ForgotPassword04 />} />

        {/* Dashboard */}
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
