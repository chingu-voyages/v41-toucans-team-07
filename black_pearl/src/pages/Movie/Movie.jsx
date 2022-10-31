import React from 'react';
import { Link } from 'react-router-dom';
import './Movie.scss';
import MoviePageComponent from '../../components/MoviePageComponent/MoviePageComponent';

const Movie = () => {
  return (
    <div className="movie-component">
      <MoviePageComponent />
    </div>
  );
};

export default Movie;
