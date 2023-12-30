import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Carrousel from "../../components/Carrousel";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import logements from "./../../logements.json";
import "./index.scss";

function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((logement) => logement.id === id);

  //Va sur la page /404 si logement ne trouve pas l'id
  useEffect(() => {
    if (!logement) {
      navigate("/404");
    }
  }, [logement, navigate]);
  //si logement ne trouve pas l'id ne return rien pour éviter les erreurs
  if (!logement) {
    return null;
  }

  return (
    <div className="Housing">
      <Carrousel img={logement.pictures} />
      {/* <img
        className="Housing__Cover"
        alt="Logement"
        src={logement.pictures[0]}
      ></img> */}

      <div className="Housing__Info">
        <div className="Housing__Info__Left">
          <h1 className="Housing__Info__Left__Title">{logement.title}</h1>
          <p className="Housing__Info__Left__Description">
            {logement.location}
          </p>
          <Tags tags={logement.tags} />
        </div>
        <div className="Housing__Info__Right">
          <div className="Housing__Info__Right__Host">
            <p className="Housing__Info__Right__Host__Name">
              {logement.host.name}
            </p>
            <img
              className="Housing__Info__Right__Host__Picture"
              alt="Avatar de l'hôte"
              src={logement.host.picture}
            ></img>
          </div>
          <Stars>{logement.rating}</Stars>
        </div>
      </div>
    </div>
  );
}

export default Housing;
