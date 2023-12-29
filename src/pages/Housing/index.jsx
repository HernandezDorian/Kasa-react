import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();
  return <h1>Hello Housing {id}</h1>;
}

export default Housing;
