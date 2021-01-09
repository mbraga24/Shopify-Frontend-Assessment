import React, { useState, useEffect } from 'react';
import { Card, Image, Divider } from 'semantic-ui-react'
import ButtonProp from '../buttonProp/ButtonProp';

import Carousel from 'react-elastic-carousel';
import './Styles.scss';

const Nominations = ({ nominatedList = [], removeFromNominatedList, icon, loader }) => {

  let nominationBody;
  let nominationHeader;
  const [ localStorageLoad, setLocalStorageLoad ] = useState(true)
  const [ showList, setShowList ]   = useState(false)

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 538, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]

  const removeMovie = movie => {
    removeFromNominatedList(movie)
  }

  const displayNominatedList = () => {
    return nominatedList.map(movie => (

      <Card key={movie.imdbID}>
        {localStorageLoad ? loader : <Image src={movie.Poster !== "N/A" ? movie.Poster : "./assets/video-placeholder.jpg"} wrapped ui={false} />}
        <Card.Content>
          <Card.Header><span className="nominations__movieTitle">{movie.Title}</span></Card.Header>
        <Card.Meta>
          <span className='nominations__movieYear'>Release Year: {movie.Year}</span>
        </Card.Meta>
        </Card.Content>
        <Card.Content extra className="nominations__btnWrapper">
          <ButtonProp 
            color="red"
            btnName="Remove"
            icon="cancel"
            handleSubmit={() => removeMovie(movie)} 
          />
        </Card.Content>
      </Card>
    ));
  }

  useEffect(() => {
    if (nominatedList.length > 0) {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }, [nominatedList])

  useEffect(() => {
    setTimeout(() => {
      setLocalStorageLoad(false)
    }, 1000)
  }, [localStorageLoad])

  nominationHeader = showList &&  <div className="nominations__header">
                                    <h2 className="nominations__title">Your nominations</h2>
                                    <Divider/>
                                  </div>
  nominationBody = displayNominatedList() 

  return (
      <div className="nominations">
        {nominationHeader}
        {
          showList &&
          <Carousel breakPoints={breakPoints} className="nominations__carousel">
            {nominationBody}
          </Carousel>
        }
      </div>
  )
}

export default Nominations;