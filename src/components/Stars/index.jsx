import { ReactComponent as StarActive } from "./../../assets/star-active.svg";
import { ReactComponent as StarInactive } from "./../../assets/star-inactive.svg";
import "./index.scss";

function Stars({ children }) {
  const Rating = parseInt(children);
  return (
    <div className="Stars">
      {[...Array(5)].map((_, i) =>
        i < Rating ? (
          <StarActive className="Stars__Star" />
        ) : (
          <StarInactive className="Stars__Star" />
        )
      )}
    </div>
  );
}

export default Stars;
