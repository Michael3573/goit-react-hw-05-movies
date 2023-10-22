import styles from './MovieInfo.module.css';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieInfo = ({ movie }) => {
  const { title, original_title, overview, genres, poster_path, vote_average } =
    movie;

  const allGenres = genres.map(genre => genre.name).join(', ');
  return (
    <div>
      <div className={styles.titleMovie}>
        <h2 className={styles.titleMovieText}>{title || original_title}</h2>
      </div>
      <div className={styles.movieCard}>
        <div className={styles.movieImg}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            width={250}
            alt={title || original_title}
          />{' '}
        </div>
        <div className={styles.info}>
          <p className={styles.movieUser}>
            <strong>User score:</strong> {vote_average}
          </p>
          <p className={styles.itemOver}>
            <strong>Overview:</strong> {overview}
          </p>
          <p className={styles.itemGen}>
            <strong>Genres:</strong> {allGenres}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
