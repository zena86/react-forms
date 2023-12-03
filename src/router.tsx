import { createBrowserRouter } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/notFound/NotFound';
import UncontrolledForm from './pages/uncontrolledForm';
import ReactHookForm from './pages/reactHookForm';

export const routerConfig = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/uncontrolled-form',
    element: <UncontrolledForm />,
  },
  {
    path: '/react-hook-form',
    element: <ReactHookForm />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerConfig);
