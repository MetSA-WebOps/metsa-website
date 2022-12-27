import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Event from "./pages/event";
import Header from "./shared/header";
import Footer from "./shared/footer";
import "./App.css";

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
    {
      path: "about",
      element: <p>About us</p>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
