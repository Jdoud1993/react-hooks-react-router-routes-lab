import React from "react";
import { movies } from "../data";



const movieTitles = movies.map((movie) => {

  const movieGenres = movie.genres.map((genre) => <li key={movie.genres.indexOf(genre)}>{genre}</li>)

  return (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h4>Genres</h4>
      <ul>
        {movieGenres}
      </ul>
    </div>
  );
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movieTitles}
    </div>
  );
}

export default Movies;
