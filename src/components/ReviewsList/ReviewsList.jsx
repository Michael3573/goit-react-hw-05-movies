import styles from './ReviewsList.module.css';

const ReviewsList = ({ reviews }) => {
  return (
    <div className={styles.ReviewsList}>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li className={styles.ReviewsItem} key={id}>
              <p className={styles.ReviewsAut}>
                <strong>Author:</strong> {author}
              </p>
              <p className={styles.ReviewsRev}>
                <strong>Review:</strong> {content}
              </p>
            </li>
          ))
        ) : (
          <p>Sorry we didnt found your reviews</p>
        )}
      </ul>
    </div>
  );
};

export default ReviewsList;
