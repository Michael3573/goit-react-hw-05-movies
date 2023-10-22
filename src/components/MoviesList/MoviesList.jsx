import { Link, useLocation } from 'react-router-dom';
import styles from '../MoviesList/MoviesList.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(location);
  return (
    <ul className={styles.cardGrid}>
      {movies.map(({ id, title, name, original_title, poster_path }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
          <li className={styles.card}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImg
              }
              width={250}
              alt={title || name || original_title}
            />
            <h2>{title || name || original_title}</h2>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MoviesList;
