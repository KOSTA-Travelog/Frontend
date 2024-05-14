import { createBrowserRouter } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './headerComponents/Header.jsx';
import HomePage from './page/HomePage.jsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
