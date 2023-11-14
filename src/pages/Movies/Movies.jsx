import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { requestSearch } from "services/api";


const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const [params, setSearchParams] = useSearchParams();
    const queryParam = params.get('query');
    const location = useLocation();

    const handleSubmit = async ev => {
        ev.preventDefault();
        setSearchParams({
          query: ev.currentTarget.elements.searchWord.value
        });
    }

    useEffect(() => {
      if (queryParam === null) {
        return;
      }
      const fetchMoviesByTitle = async () => {
        try {
          const { results } = await requestSearch(queryParam);
          setSearchMovies(results);
          console.log(results);
        } catch (error) {
          console.error(error);
        }
      };
      fetchMoviesByTitle();
    }, [queryParam]);

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            name="searchWord"
            type="text"
            placeholder="Enter search for a movie"
            defaultValue={queryParam}
          />
          <button type="submit">
            Search
          </button>
        </form>
        <ul>
          {searchMovies.map(movie => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              params={{ movieId: movie.id }}
            >
              <div>
                <p>{movie.title || movie.name}</p>
              </div>
            </Link>
          ))}
        </ul>
      </>
    );
}

export default Movies;