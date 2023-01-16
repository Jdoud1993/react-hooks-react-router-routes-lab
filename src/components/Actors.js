import React from "react";
import { actors } from "../data";

const actorsNames = actors.map((actor) => {

  const actorsMovies = actor.movies.map((movie) => <li key={movie}>{movie}</li>)

  return (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <h3>Movies:</h3>
      <ul>
        {actorsMovies}
      </ul>
    </div>
  )
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsNames}
    </div>
  );
}

export default Actors;
