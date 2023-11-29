import React from 'react';
import { useState } from 'react';
import CardItem from '../CardItem';
import './cardList.css';

function CardList({ activeSearch, movies , onlikedItem}) {
  if (activeSearch == true) {
    return (
      <ul className="list">
        {movies.map((movie, index) => (
          <li>
            <CardItem
              index={index}
              poster={movie.Poster}
              year={movie.Year}
              imdbId={movie.imdbID}
              onLiked={() => onlikedItem(movie)}
            />
          </li>
        ))}
      </ul>
    );
  } else {
    return <h2>Start by searching a movie !</h2>;
  }
}

export default CardList;
