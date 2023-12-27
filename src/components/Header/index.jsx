import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import "./index.scss";

function Header() {
  return (
    <nav className="Header">
      <Link to="/" className="Header__Logo">
        <Logo className="Header__Logo__Img" alt="Logo Kasa"></Logo>
      </Link>
      <ul className="Header__menu">
        <li className="Header__menu__li">
          <Link className="Link" to="/">
            Accueil
          </Link>
        </li>
        <li className="Header__menu__li">
          <Link className="Link" to="/about">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
