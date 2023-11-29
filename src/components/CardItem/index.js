import React from 'react';

function CardItem({ index, poster, year, imdbId, onLiked }) {
  return (
    <figure className="item">
      <img class="img-item" id={index} src={poster} alt="movie-poster" />
      <a href={'/details/' + imdbId + '/'} target="_blank">
        <figcaption class="caption-item">{year}</figcaption>
      </a>
      <button onClick={() => onLiked(true)}>Like👍</button>
    </figure>
  );
}

export default CardItem;
