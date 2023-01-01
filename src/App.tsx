import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/event";
import Header from "./shared/header";
import Footer from "./shared/footer";
import Carousel from "./pages/event/Carousel";
import {events} from "./content/eventsdata";
import "./App.css";
import "./pages/event/Carousel.css"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "event/:id",
      element: <Event />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Event />
      <Footer />
    </div>
  );
}

export default App;
