import "./index.scss";

function Imgbar({ text, img, className }) {
  return (
    <div
      className={`Imgbar ${className}`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <p className="Imgbar__Text">{text}</p>
    </div>
  );
}

export default Imgbar;
