import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import "./index.scss";

function Header() {
  const location = useLocation();
  return (
    <header className="Header">
      <Link to="/" className="Header__Logo">
        <h1>
          <Logo className="Header__Logo__Img" alt="Kasa"></Logo>
        </h1>
      </Link>
      <nav>
        <ul className="Header__menu">
          <li
            className={`Header__menu__li${
              location.pathname === "/" ? " Underline" : ""
            }`}
          >
            <Link className="Link" to="/">
              Accueil
            </Link>
          </li>
          <li
            className={`Header__menu__li${
              location.pathname === "/about" ? " Underline" : ""
            }`}
          >
            <Link className="Link" to="/about">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
