import React from "react";
import { directors } from "../data";

const directorsNames = directors.map((director) => {

  const directorsMovies = director.movies.map((movie) => <li key={movie}>{movie}</li>)

  return (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <h3>Movies</h3>
      <ul>
        {directorsMovies}
      </ul>
    </div>
  )
})

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directorsNames}
  </div>
  );
}

export default Directors;
