import React, { useState, useEffect } from 'react';
import { Image, Divider, Card, Placeholder } from 'semantic-ui-react'
import ButtonProp from "../buttonProp/ButtonProp";

import './Styles.scss';

const Nominations = ({ nominatedList = [], removeFromNominatedList, icon }) => {

  const [ showList, setShowList ]   = useState(false)
  const [ localStorageLoad, setLocalStorageLoad ] = useState(true)

  const removeMovie = movie => {
    removeFromNominatedList(movie)
  }

  const displayNominatedList = () => {
    return nominatedList.map(mv => (
        <Card key={`${mv.Title}--${mv.Poster}`}>
          <Card.Content>
            <Placeholder>
              {localStorageLoad ? <Placeholder.Image /> : <Image src={mv.Poster} />}
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
  }

  useEffect(() => {
    if (nominatedList.length > 0) {
      setShowList(true)
    } else {
      setShowList(false)
    }
  }, [nominatedList.length])

  useEffect(() => {
    setTimeout(() => {
      setLocalStorageLoad(false)
    }, 1000)
  }, [localStorageLoad])

  const displayBody = showList ? displayNominatedList() : <span className="nominations__title">Your nominations</span>

  return (
    <div className="nominations">
      <Card.Group className="nominations__elements" itemsPerRow={6}>
        {icon}{displayBody}
      </Card.Group>
      <Divider/>
    </div>
  )
}

export default Nominations;