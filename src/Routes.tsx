import { lazy, Suspense } from 'react';
import { Route, Routes as RoutesContainer } from 'react-router-dom';
import './styles/App/index.scss';
import SpinContainer from './components/layout/SpinContainer';
import HomePage from './pages/HomePage';
import Slideshow from './pages/Slideshow';
import Layout from './components/layout/Layout';
const Page404 = lazy(() => import('./components/layout/NotFoundPage'));

const Routes = () => {
  return (
    <RoutesContainer>
      <Route
        path={'/'}
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path={'/slideshow'}
        element={
          <Layout>
            <Slideshow />
          </Layout>
        }
      />
      <Route
        path={'/*'}
        element={
          <Suspense fallback={<SpinContainer />}>
            <Page404 />
          </Suspense>
        }
      />
    </RoutesContainer>
  );
};

export default Routes;
