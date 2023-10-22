import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useFetchReviews } from 'hooks';
import React from 'react';

const Reviews = () => {
  const { reviews, isLoading, error } = useFetchReviews();
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default Reviews;
