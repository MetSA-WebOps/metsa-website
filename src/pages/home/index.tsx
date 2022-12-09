import content from "../../content/home.json";
import "./style.css";

function Home() {
  return (
    <div className="landing">
      <h1>{content.title}</h1>
      <h4>{content.subTitle}</h4>
      <p>{content.description}</p>
    </div>
  );
}

export default Home;
