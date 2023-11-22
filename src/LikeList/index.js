import React from 'react';
import './likeList.css';

function LikeList({ likes }) {
  return (
    <ul className="likes">
      {likes.map((like, index) => (
        <li id={index}>
          {like.Title}
          <button>Unlike</button>
        </li>
      ))}
    </ul>
  );
}

export default LikeList;
