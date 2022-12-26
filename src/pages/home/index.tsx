import Header from "../../shared/header";
import Eventlist from "./eventlist";
import "./style.css";

function Home() {
  return (
    <div className="landing">
      <Header />
      <img src="src/assets/gc.webp" style={{ width: "100%" }} />
      <Eventlist />
    </div>
  );
}

export default Home;
