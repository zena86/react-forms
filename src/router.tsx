import { createBrowserRouter } from 'react-router-dom';
// import ErrorFallback from './components/errorFallback/ErrorFallback';
import Main from './pages/main';
import NotFound from './pages/notFound/NotFound';
import UncontrolledForm from './pages/uncontrolledForm';
import ReactHookForm from './pages/reactHookForm';

export const routerConfig = [
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorFallback text="Something went wrong" />,
  },
  {
    path: '/uncontrolled-form',
    element: <UncontrolledForm />,
    // errorElement: <ErrorFallback text="Something went wrong" />,
  },
  {
    path: '/react-hook-form',
    element: <ReactHookForm />,
    // errorElement: <ErrorFallback text="Something went wrong" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerConfig);
