import { createBrowserRouter } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Login from '../pages/Login.jsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/foo',
    element: <Footer />,
  },
  {
    path: '/head',
    element: <Header />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default Router;
