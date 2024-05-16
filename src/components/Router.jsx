import { createBrowserRouter } from 'react-router-dom';
import Footer from './Footer.jsx';
import Header from './headerComponents/Header.jsx';
import HomePage from './page/HomePage.jsx';
import Login from '../pages/auth/Login.jsx';
import Registration from '../pages/auth/Registration.jsx';
import FindAccount from '../pages/auth/FindAccount.jsx';
import FindPassword from '../pages/auth/FindPassword.jsx';
import Community from '../pages/Community.jsx';

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
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/findAccount',
    element: <FindAccount />,
  },
  {
    path: '/findPassword',
    element: <FindPassword />,
  },
  {
    path: '/community',
    element: <Community />,
  },
]);

export default Router;
