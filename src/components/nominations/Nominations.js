import React, { useState, useEffect } from 'react';
import { Grid, Image, Divider, Card, Placeholder } from 'semantic-ui-react'
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
      <Grid.Column>
        <Card key={`${mv.Title}--${mv.Poster}`}>
          <Placeholder>
            {localStorageLoad ? <Placeholder.Image /> : <Image src={mv.Poster} />}
          </Placeholder>
          <Card.Content>
            <Card.Header>{mv.Title}</Card.Header>
            <Card.Meta>
              <span className='date'>{mv.Year}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <ButtonProp
              color='red' 
              btnName={"Remove"}
              icon="cancel"
              handleSubmit={() => removeMovie(mv)} 
            />
          </Card.Content>
        </Card>
      </Grid.Column>
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

  const nominationBody = showList && displayNominatedList() 
  const nominationHeader = showList && 
  <>
  <div className="nominations__header">
    {icon} <span className="nominations__title">Your nominations</span>
  </div>
  <Divider/>
  </>

  return (
    <div className="nominations">
      {nominationHeader}
      <Grid>
        <Grid.Row className="nominations__elements" columns={5}>
          {nominationBody}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Nominations;