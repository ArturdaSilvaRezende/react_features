import { Link } from "react-router-dom";
import Dropdown from "../features/dropdown";
import * as C from "./style";

export default function Sidebar() {
  return (
    <C.Sidebar>
      <Link to="/">Home</Link>
      <Dropdown label="Features">
        <Link to="/rcpagination">Pagination</Link>
      </Dropdown>
      <Dropdown label="Telas">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </Dropdown>
    </C.Sidebar>
  );
}
