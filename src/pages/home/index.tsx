import { useNavigate } from "react-router-dom";
import Header from "../../shared/header";
import Eventlist from "./eventlist";
import "./style.css";

function Home() {
  const navigator = useNavigate();
  const onClick = () => {
    navigator('about')
  }
  return (
    <>
      <Header />
      <div className="landing">
        <div className="start">
          <div className="start-content">
            <h1 style={{ fontSize: "48px", marginTop: "0" }}>METSA</h1>
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Metallurgical and Materials Engineering Student Association</h2>
            <p>It is a student body which handles the various departmental activites for the students  of MME. The main aim of the MetSA team is to promote a departmental connection within the students through different activities.</p>
          </div>
        </div>
        <h2 style={{ margin: "60px", color: "white", fontSize: "40px" }}>Timeline of Events</h2>
        <Eventlist />
        <button className="events-btn" onClick={onClick}>Know more</button>
        <h2 style={{ margin: "60px", color: "white", fontSize: "40px" }}>Our Sponsors</h2>
      </div>
    </>
  );
}

export default Home;
