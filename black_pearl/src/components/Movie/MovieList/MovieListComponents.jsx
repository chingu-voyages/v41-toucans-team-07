import React from "react";

function MovieListComponents(props) {
  return (
    <div className="movie-card">
      <div className="img-container">
        <img src={props.img} alt="" className="movie-img" />
      </div>
      <h4 className="movie-title">{props.title}</h4>
    </div>
  );
}

export default MovieListComponents;
