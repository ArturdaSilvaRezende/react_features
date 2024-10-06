import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "../pages/notfound";
import FeaturesRoutes from "../components/features/routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FeaturesRoutes />
    </BrowserRouter>
  );
}
