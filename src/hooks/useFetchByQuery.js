import { getMoviesByQuery } from 'api/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFetchByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  useEffect(() => {
    if(query.trim() === "") {
        return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  const onHandleSubmit = (value) => {
    setSearchParams({q: value});
  }

  return { movies, isLoading, error, onHandleSubmit};
};
