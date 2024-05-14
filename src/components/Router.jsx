import {createBrowserRouter} from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/foo",
    element: <Footer/>
  },
  {
    path: "/head",
    element: <Header/>
  }
]);

export default Router