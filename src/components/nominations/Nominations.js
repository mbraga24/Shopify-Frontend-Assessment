import React, { useState, useEffect, useCallback } from 'react';
import { Image, Divider, Card, Placeholder } from 'semantic-ui-react'
import ButtonProp from "../buttonProp/ButtonProp";

import './Styles.scss';

const Nominations = ({ nominatedList = [], removeFroNominatedList, icon }) => {
  
  const [ displayBody, setDisplayBody ]   = useState([])
  const [ localStorageLoad, setLocalStorageLoad ] = useState(true)
  const displayArchive = mv => {
    return localStorageLoad ? <Placeholder.Image /> : <Image src={mv.Poster} />
  }

  const removeMovie = movie => {
    removeFroNominatedList(movie)
  }

  const displayNominatedList = useCallback(() => {
    return nominatedList.map(mv => (
        <Card key={`${mv.Title}--${mv.Poster}`}>
          <Card.Content>
            <Placeholder>
              {displayArchive(mv)}
            </Placeholder>
          </Card.Content>
          <ButtonProp
            color='red' 
            btnName={"Remove"}
            icon="cancel"
            handleSubmit={() => removeMovie(mv)} 
          />
        </Card>
    ));
  }, [nominatedList, localStorageLoad])

  useEffect(() => {
    if (nominatedList.length > 0) {
      setDisplayBody(displayNominatedList())
    } else {
      setDisplayBody(<span className="nominations__title">Your nominations</span>)
    }
  }, [nominatedList.length, displayNominatedList])

  useEffect(() => {
    setTimeout(() => {
      setLocalStorageLoad(false)
    }, 1000)
  }, [localStorageLoad])

  return (
    <div className="nominations">
      <Card.Group className="nominations__elements" itemsPerRow={5}>
        {icon}{displayBody}
      </Card.Group>
      <Divider/>
    </div>
  )
}

export default Nominations;