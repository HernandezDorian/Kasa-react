import "./index.scss";
import Collapse from "../../components/Collapse";
import Imgbar from "../../components/Imgbar";
import background from "../../assets/BgAbout.jpg";

function About() {
  return (
    <main className="About">
      <Imgbar className="About__Imgbar" text="" img={background} />
      <div className="About__CollapseList">
        <Collapse className={"About__CollapseList__Collapse"} Title="Fiabilité">
          <p className={"About__CollapseList__Collapse__Txt"}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse className={"About__CollapseList__Collapse"} Title="Respect">
          <p className={"About__CollapseList__Collapse__Txt"}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse className={"About__CollapseList__Collapse"} Title="Service">
          <p className={"About__CollapseList__Collapse__Txt"}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse className={"About__CollapseList__Collapse"} Title="Sécurité">
          <p className={"About__CollapseList__Collapse__Txt"}>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </main>
  );
}

export default About;
