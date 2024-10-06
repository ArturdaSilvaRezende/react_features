import { Link } from "react-router-dom";
import * as C from "./style";

export default function Sidebar() {
  return (
    <C.Sidebar>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </C.Sidebar>
  );
}
