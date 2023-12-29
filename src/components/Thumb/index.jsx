import "./index.scss";
import { Link } from "react-router-dom";

function Thumb({ text, img, className, id }) {
  return (
    <Link
      to={`housing/${id}`}
      className={`Thumb ${className}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <p className="Thumb__Text">{text}</p>
    </Link>
  );
}

export default Thumb;
