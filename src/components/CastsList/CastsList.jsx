import styles from './CastsList.module.css';

const defaultImg =
  'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png';
const CastsList = ({ casts }) => {
  return (
    <ul className={styles.cardWrapper}>
      {casts.length > 0 ? (
        casts.map(({ character, id, profile_path, name }) => (
          <li className={styles.cardItem} key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={250}
              alt={name}
            />
            <p className={styles.cardName}>Name: {name}</p>
            <p className={styles.cardChar}>Character: {character}</p>
          </li>
        ))
      ) : (
        <p>Sorry we didnt found your cast</p>
      )}
    </ul>
  );
};

export default CastsList;
