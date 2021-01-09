import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ButtonProp from '../buttonProp/ButtonProp';

import './Styles.scss';

const MovieCard = ({ movie, movieAction, btnName, iconName, loadReady = false, disableBtns, checkList }) => {
  
  console.log("checkList", checkList)

  const loader = <img className="App__iconLoader" alt="loading" src="./assets/loading.png" />
  let src = movie.Poster !== "N/A" ? movie.Poster : "./assets/video-placeholder.jpg";

  return (
      <Card className="movieCard">
        <Image src={loadReady ? loader : src} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{movie.Title}</Card.Header>
        <Card.Meta>
          <span className='date'>{movie.Year}</span>
        </Card.Meta>
        </Card.Content>
        <Card.Content extra className="movieCard__btnWrapper">
          <ButtonProp 
            btnName={btnName}
            icon={iconName}
            handleSubmit={() => movieAction(movie)} 
            disable={disableBtns ? true : checkList(movie.imdbID)}
          />
        </Card.Content>
      </Card>
  )
}

export default MovieCard;