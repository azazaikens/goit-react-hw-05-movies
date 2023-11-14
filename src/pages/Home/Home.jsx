import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestTrendMovies } from '../../services/api';

const Home = () => {
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { results } = await requestTrendMovies();
        setTrend(results);
      } catch (error) {
        console.error(error);
      }
    };
    getTrending();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <ul>
        {trend.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`} key={movie.id}>
                  <p>{movie.title || movie.name}</p>
                </Link>
              </li>
            );
        })}
      </ul>
    </>
  );
};

export default Home;