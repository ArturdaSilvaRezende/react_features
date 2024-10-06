import { Route, Routes } from "react-router-dom";
import RcPagination from "./pagination";

export default function FeaturesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RcPagination />} exact />
    </Routes>
  );
}
