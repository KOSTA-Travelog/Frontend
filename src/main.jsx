import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/*<App />*/}
      <RouterProvider router={router}/>
    </React.StrictMode>,
)
