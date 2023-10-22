import MoviesList from 'components/MoviesList/MoviesList';
import SearchFrom from 'components/SearchFrom/SearchFrom';
import { useFetchByQuery } from 'hooks';
import React from 'react';

const Movies = () => {
  const { movies, isLoading, error, onHandleSubmit } = useFetchByQuery();
  console.log(movies);
  return (
    <>
      <SearchFrom handleSubmit={onHandleSubmit} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Movies;
