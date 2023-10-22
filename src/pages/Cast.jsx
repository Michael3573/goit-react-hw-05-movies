import CastsList from 'components/CastsList/CastsList';
import { useFetchCasts } from 'hooks';

const Cast = () => {
  const { casts, isLoading, error } = useFetchCasts();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <CastsList casts={casts} />
    </>
  );
};

export default Cast;
