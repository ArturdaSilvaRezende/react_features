import { Link } from "react-router-dom";
import Dropdown from "../features/dropdown";
import * as C from "./style";

export default function Sidebar() {
  return (
    <C.Sidebar>
      <Link to="/">Home</Link>
      <Dropdown label="Features">
        <Link to="/rcpagination">Pagination</Link>
        <Link to="/timer">Timer</Link>
      </Dropdown>
      <Dropdown label="Telas">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Link to="/login">Login</Link>
          <Link to="/forgotpassword01">Esqueceu a Senha 01</Link>
          <Link to="/forgotpassword02">Esqueceu a Senha 02</Link>
          <Link to="/forgotpassword03">Esqueceu a Senha 03</Link>
          <Link to="/forgotpassword04">Esqueceu a Senha 04</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </Dropdown>
      <Dropdown label="Modules">
        <Link to="/modules">Modules</Link>
      </Dropdown>
    </C.Sidebar>
  );
}
