import React, { useState, useEffect, useCallback } from 'react';
import { Image, Divider } from 'semantic-ui-react'

import './Styles.scss';

const Nominations = ({ nominatedList = [], icon, addToNominatedList }) => {
  
  const [ displayBody, setDisplayBody ]   = useState([])

  const displayNominatedList = () => {
    return nominatedList.map(mv => (
      <Image.Group size='tiny' className="nominations__picksWrapper">
        <Image className="nominations__pick" src={mv.Poster} />
      </Image.Group>
    ));
  }

  // const displayNominatedList = useCallback(() => {
  //   return nominatedList.map(mv => (
  //     <Image.Group size='tiny' className="nominations__picksWrapper">
  //       <Image className="nominations__pick" src={mv.Poster} />
  //     </Image.Group>
  //   ));
  // }, [])

  useEffect(() => {
    if (nominatedList.length > 0) {
      setDisplayBody(displayNominatedList())
    } else if (localStorage.length > 0) {
      for (const [key, value] of Object.entries(localStorage)) {
        console.log(key)
        addToNominatedList(JSON.parse(localStorage.getItem(key)))
      }
    } else {
      setDisplayBody(<span className="nominations__title">Your nominations</span>)
    }
  }, [nominatedList])

  console.log("nominatedList NOMINATIONS ->", nominatedList)
  // console.log("displayBody NOMINATIONS ->", displayBody)

  return (
    <div className="nominations">
      <div className="nominations__elements">
        {icon}{displayBody}
      </div>
      <Divider/>
    </div>
  )
}

export default Nominations;