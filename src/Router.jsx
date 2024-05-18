import { createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/headerComponents/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import FeedPage from './pages/FeedPage.jsx';
import Login from './pages/auth/Login.jsx';
import CreateAccount from './pages/auth/CreateAccount.jsx';
import FindAccount from './pages/auth/FindAccount.jsx';
import FindPassword from './pages/auth/FindPassword.jsx';
import Community from './pages/community/Community.jsx';
import CommunityDetail from './pages/community/CommunityDetail.jsx';
import CommunityWrite from './pages/community/CommunityWrite';
import CheckPassword from './pages/myPage/CheckPassword.jsx';

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
    path: '/foo',
    element: <Footer />,
  },
  {
    path: '/head',
    element: <Header />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/createAccount',
    element: <CreateAccount />,
  },
  {
    path: '/auth/findAccount',
    element: <FindAccount />,
  },
  {
    path: '/auth/findPassword',
    element: <FindPassword />,
  },
  {
    path: '/community',
    element: <Community />,
  },
  {
    path: '/community/details',
    element: <CommunityDetail />,
  },
  {
    path: '/community/write',
    element: <CommunityWrite />,
  },
  {
    path: '/myPage/checkPassword',
    element: <CheckPassword />,
  },
]);

export default Router;
