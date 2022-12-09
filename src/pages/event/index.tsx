import { useParams } from "react-router-dom";

function Event() {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
}

export default Event;
