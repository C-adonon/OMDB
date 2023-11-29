import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details({}) {
  const BASE_URL = "https://www.omdbapi.com/?apikey=e3ecc307&i=";
  const END_URL = "&plot=full";
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  async function handleOnDetails(id) {
    let fetchUrl = BASE_URL + id + END_URL;
    let response = await fetch(fetchUrl);
    let data = await response.json();
    setMovie(data);
    console.log(data);
  }

  useEffect(() => {
    handleOnDetails(id);
  });

  if (movie == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container flex flex-row auto">
      <div class="movie-info basis-1/2">
        <h1>{movie.Title}</h1>
        <h2>Director : {movie.Director}</h2>
        <h3>Actors : {movie.Actors}</h3>
        <p>Runtime : {movie.Runtime}</p>
        <p>
          {movie.Country}- {movie.Year}
        </p>
        <div>
          <ul class="movie-ratings basis-1/2">
            {movie.Ratings.map((rating, index) => (
              <li>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
        <p class="movie-plot">{movie.Plot}</p>
        <a href={"https://www.imdb.com/title/" + movie.imdbID + "/"}>
          Watch trailer
        </a>
      </div>
      <div class="poster">
        <img src={movie.Poster} alt="movie-poster" />
      </div>
    </div>
  );
}

export default Details;
