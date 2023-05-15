import Layout from 'components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));


export const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to='/' />  } />
        </Route>
      </Route>
    </Routes>
  );
};
