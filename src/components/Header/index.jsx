import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import "./index.css";

function Header() {
  return (
    <nav>
      <Link to="/">
        <Logo className="Logo" alt="Logo Kasa"></Logo>
      </Link>
      <ul>
        <li>
          <Link className="Link" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="Link" to="/about">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
