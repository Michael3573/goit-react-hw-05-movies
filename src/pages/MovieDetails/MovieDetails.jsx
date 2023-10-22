import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useFetchMoviesDetails } from 'hooks';
import React, { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movie, isLoading, error } = useFetchMoviesDetails();
  const location = useLocation();
  console.log(location);
  const backLink = useRef(location?.state?.from ?? '/');

  return (
    <div className={styles.container}>
      <Link to={backLink.current}>
        <button className={styles.btnGoBack} type="button">
          <strong>Go back</strong>
        </button>
      </Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movie && <MovieInfo movie={movie} />}
      <p className={styles.movieText}>Additional Inforamtion</p>
      <nav className={styles.nav}>
        <Link className={styles.movieCast} to="cast">
          Cast
        </Link>
        <Link className={styles.movieRev} to="reviews">
          Reviews
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
