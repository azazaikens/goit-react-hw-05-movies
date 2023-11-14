import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestCasts } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchCast = async () => {
      try {
        const result = await requestCasts(movieId);
        setCastData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {castData ? (
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          {castData?.cast?.map(cast => (
            <li
              style={{
                listStyle: 'none',
              }}
              key={cast.id}
            >
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w185${cast.profile_path}`
                    : 'https://previews.123rf.com/images/urfandadashov/urfandadashov1805/urfandadashov180500070/100957966-photo-not-available-icon-isolated-on-white-background,-vector-illustration.jpg'
                }
                alt={cast.name}
                width={'180'}
                height={'260'}
              />
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Cast;
