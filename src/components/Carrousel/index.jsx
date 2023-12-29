import "./index.scss";
function Carrousel({ img }) {
  return (
    <div className="Carrousel">
      {img.map((image, index) => (
        <img
          key={index}
          className="Carrousel__img"
          alt="Logement"
          src={image}
        ></img>
      ))}
    </div>
  );
}

export default Carrousel;
