import React from 'react';
import Film from './Film.js';

const FilmList = (props) => {

  const filmNodes = props.data.map((film) => {
    return(
      <Film key={film.id} name={film.name} url={film.url} />
    )
  })
  return (
    <div>
    <h1>Upcoming Film releases</h1>
    {filmNodes}
    
    </div>
  );
}
export default FilmList;
