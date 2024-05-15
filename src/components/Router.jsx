import {createBrowserRouter} from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import HomeFeed from "./HomeFeed.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFeed/>,
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