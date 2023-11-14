// import { Cast } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';
import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { requestDetails } from 'services/api';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(1);
  const location = useLocation();
  const backLinkRef = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchMoviesById = async () => {
      try {
        const result = await requestDetails(movieId);
        setMovieData(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMoviesById();
  }, [movieId]);

  const userScore = Math.floor(movieData?.vote_average * 10);
  const genres = movieData?.genres?.map(genre => genre.name)?.join(', ');
  const releaseDate = movieData?.release_date?.slice(0, 4);
  let urlImg;
  movieData.poster_path
    ? (urlImg = `https://image.tmdb.org/t/p/w342${movieData.poster_path}`)
    : (urlImg = false);
  return (
    <>
      <Link to={backLinkRef.current}> Go back</Link>

      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <div>
          <img
            style={{
              width: '240px',
              height: '380px',
            }}
            src={
              urlImg
                ? urlImg
                : 'https://media.istockphoto.com/id/1392182937/vector/no-image-available-photo-coming-soon.jpg?s=612x612&w=0&k=20&c=3vGh4yj0O2b4tPtjpK-q-Qg0wGHsjseL2HT-pIyJiuc='
            }
            alt={movieData.title}
          />
        </div>
        <div>
          <h1>
            {movieData.title} ({releaseDate})
          </h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <h4>Additional information</h4>
      <div>
        <Link to="cast">Cast</Link>
        <Link
          style={{
            marginLeft: '10px',
          }}
          to="reviews"
        >
          Reviews
        </Link>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;