import "./index.scss";

function Imgbar({ text, img, className }) {
  return (
    <div
      className={`Imgbar ${className}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <h2 className="Imgbar__Text">{text}</h2>
    </div>
  );
}

export default Imgbar;
