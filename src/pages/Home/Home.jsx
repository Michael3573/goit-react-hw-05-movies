import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchTrandMovies } from 'hooks';
import styles from './home.module.css';

const Home = () => {
  const { movies, isLoading, error } = useFetchTrandMovies();

  return (
    <div className={styles.container}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Home;
