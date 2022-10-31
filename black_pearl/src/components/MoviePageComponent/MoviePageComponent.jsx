import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../../components/Movie/movieData';
import MenuItems from '../MenuItems/MenuItems';
import './moviepagecomponent.scss';

const Movie = () => {
  return (
    <div className="movie-menu">
      {movies.map(({ id, ...otherMovieData }) => (
        <MenuItems id={id} {...otherMovieData} />
      ))}
    </div>
  );
};

export default Movie;
