import "./index.scss";

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
