import "./index.scss";
import Imgbar from "../../components/Imgbar";
import Thumb from "../../components/Thumb";
import background from "../../assets/BgHome.png";
import logements from "./../../logements.json";

function Home() {
  return (
    <main className="Home">
      <Imgbar
        className="Home__Imgbar"
        text="Chez vous, partout et ailleurs"
        img={background}
      />
      <div className="Home__ThumbList">
        {logements.map((logement, index) => (
          <Thumb
            key={index}
            id={logement.id}
            className="Home__ThumbList__Thumb"
            text={logement.title}
            img={logement.cover}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
