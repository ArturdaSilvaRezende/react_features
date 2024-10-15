import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import RcPaginationPage from "../pages/features/pages/RcPagination";
import ResendTimer from "../components/features/timer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/rcpagination" element={<RcPaginationPage />} />
        <Route path="/timer" element={<ResendTimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
