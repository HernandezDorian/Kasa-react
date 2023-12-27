import "./index.scss";
import logement from "./../../logements.json";

function Thumb({ text, img, className }) {
  return (
    <div
      className={`Thumb ${className}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <p className="Thumb__Text">{text}</p>
    </div>
  );
}

export default Thumb;
