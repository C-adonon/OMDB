// import React from 'react';
// import { useState } from 'react';
// import './style.css';
// import AddItem from './components/AddItem';
// import CardList from "./components/CardList";

// function getLikesFromCache() {
//   return JSON.parse(localStorage.getItem('likes') || '[]');
// }

// function SaveLikesToCache(likes) {
//   localStorage.setItem('likes', JSON.stringify(likes));
// }

// export default function App() {
//   const BASE_URL = 'https://www.omdbapi.com/?apikey=e3ecc307&s=';
//   const [searchIsActive, setSearchIsActive] = useState(false);
//   const [data, setData] = useState([]);
//   const [likes, setLikes] = useState(getLikesFromCache());

//   async function handleOnSearch(query) {
//     setSearchIsActive(true);
//     let fetchUrl = BASE_URL + query;
//     let response = await fetch(fetchUrl, {
//       method: 'GET',
//     });
//     let data = await response.json();
//     setData(data.Search);
//   }

//   function handleAddLikes(movie) {
//     let newLikes = [...likes];
//     newLikes.push(movie);
//     setLikes(newLikes);
//     SaveLikesToCache(newLikes);
//   }

//   function handleRemoveLikes(id) {
//     console.log(id);
//     let newLikes = [...likes].filter((l) => l.imdbID != id);
//     setLikes(newLikes);
//     SaveLikesToCache(newLikes);
//   }

//   return (
//     <div style={{ textAlign: 'center', paddingTop: '50px' }}>
//       {likes.map((like, index) => (
//         <div>
//           {like.Title}- {like.Year}
//           <button onClick={() => handleRemoveLikes(like.imdbID)}>Unlike</button>
//         </div>
//       ))}
//       <h1>OMDB: List de films</h1>
//       <AddItem onSearch={handleOnSearch} />
//       <CardList
//         activeSearch={searchIsActive}
//         movies={data}
//         onlikedItem={handleAddLikes}
//       />
//     </div>
//   );
// }
