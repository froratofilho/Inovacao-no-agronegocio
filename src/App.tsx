import { lazy } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Tecnologia = lazy(() => import('./pages/Tecnologia'));
const Comparativo = lazy(() => import('./pages/Comparativo'));
const Galeria = lazy(() => import('./pages/Galeria'));
const Regulamentacao = lazy(() => import('./pages/Regulamentacao'));
const Cursos = lazy(() => import('./pages/Cursos'));
const Projeto = lazy(() => import('./pages/Projeto'));
const Faq = lazy(() => import('./pages/Faq'));
const Creditos = lazy(() => import('./pages/Creditos'));
const NotFound = lazy(() => import('./pages/NotFound'));

const createRouter = import.meta.env.VITE_HASH_ROUTER ? createHashRouter : createBrowserRouter;

const router = createRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/tecnologia', element: <Tecnologia /> },
      { path: '/comparativo', element: <Comparativo /> },
      { path: '/galeria', element: <Galeria /> },
      { path: '/regulamentacao', element: <Regulamentacao /> },
      { path: '/cursos', element: <Cursos /> },
      { path: '/projeto', element: <Projeto /> },
      { path: '/faq', element: <Faq /> },
      { path: '/creditos', element: <Creditos /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
