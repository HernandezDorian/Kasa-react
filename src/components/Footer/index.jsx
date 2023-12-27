import { ReactComponent as Logo } from "./../../assets/whitelogo.svg";
import "./index.scss";

function Footer() {
  return (
    <footer className="Footer">
      <Logo className="Footer__Logo" alt="Logo Kasa"></Logo>
      <p className="Footer__Copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
