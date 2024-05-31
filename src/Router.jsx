import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import FeedPage from './pages/feed/FeedPage.jsx';
import Login from './pages/auth/Login.jsx';
import CreateAccount from './pages/auth/CreateAccount.jsx';
import FindAccount from './pages/auth/FindAccount.jsx';
import FindPassword from './pages/auth/FindPassword.jsx';
import Community from './pages/community/Community.jsx';
import CommunityDetail from './pages/community/CommunityDetail.jsx';
import CommunityWrite from './pages/community/CommunityWrite';
import CheckPassword from './pages/myPage/CheckPassword.jsx';
import DeleteAccount from './pages/myPage/DeleteAccount.jsx';
import MyProfile from './pages/myPage/MyProfile.jsx';
import EditUserData from './pages/myPage/EditUserData.jsx';
import CommunityForGuest from './pages/community/CommunityForGuest.jsx';
import CommunityEdit from './pages/community/CommunityEdit.jsx';
import FeedWritePage from './pages/feed/FeedWritePage.jsx';
import AddMember from './pages/community/AddMember.jsx';
import Error from './pages/Error';
import NotFoundPage from './pages/NotFoundPage';
import CurrentMember from './pages/community/CurrentMember.jsx';

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
  // {
  //   path: '/community/user',
  //   element: <Community />,
  // },
  {
    path: '/community',
    element: `${JSON.parse(sessionStorage.getItem('userId')) != null}` ? (
      <CommunityForGuest />
    ) : (
      <Community />
    ),
  },
  {
    path: '/community/detail',
    element: <CommunityDetail />,
    errorElement: <Error />,
  },
  {
    path: '/community/write',
    element: <CommunityWrite />,
  },
  {
    path: '/myPage/checkPassword',
    element: <CheckPassword />,
  },
  {
    path: '/myPage/deleteAccount',
    element: <DeleteAccount />,
  },
  {
    path: '/myPage/profile',
    element: <MyProfile />,
  },
  {
    path: '/myPage/edit',
    element: <EditUserData />,
  },
  {
    path: '/community/edit',
    element: <CommunityEdit />,
  },
  {
    path: '/feed/write',
    element: <FeedWritePage />,
  },
  {
    path: '/community/addMember',
    element: <AddMember />,
  },
  // {
  //   path: '/community/addMember/:nickname',
  //   element: <AddMember />,
  //   errorElement: <Error />,
  // },
  {
    path: '/community/currentMember',
    element: <CurrentMember />,
    errorElement: <Error />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default Router;
