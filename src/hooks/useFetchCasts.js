import { getCredits } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchCasts = () => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCredits(movieId);
        setCasts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return { casts, isLoading, error };
};
