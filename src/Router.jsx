import { createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/headerComponents/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import Login from './pages/auth/Login.jsx';
import Registration from './pages/auth/Registration.jsx';
import FindAccount from './pages/auth/FindAccount.jsx';
import FindPassword from './pages/auth/FindPassword.jsx';
import Community from './pages/community/Community.jsx';
import CommunityDetails from './pages/community/CommunityDetails.jsx';

const Router = createBrowserRouter([
  {
    path: '/feed/:id',
    element: <FeedPage />,
  },
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
  {
    path: '/community/details',
    element: <CommunityDetails />,
  },
]);

export default Router;
