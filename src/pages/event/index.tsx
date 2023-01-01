import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import {events} from "../../content/eventsdata";
import "./index.css";

function Event() {
  const { id } = useParams<{ id: string }>();
  return  (<div className="Index">
            {id}
            <Carousel props={events} />
            <button className="btn">Register</button>
            {/*<p className="desc">abcd</p>*/}
          </div>);
}

export default Event;
