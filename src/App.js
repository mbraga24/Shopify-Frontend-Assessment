import React, { useState, useCallback, useEffect } from 'react';
import Nominations from './components/nominations/Nominations';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';
import Message from './components/message/Message';

import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faAngleUp } from '@fortawesome/free-solid-svg-icons'

import 'semantic-ui-css/semantic.min.css'
import './styles/App.scss';

function App() {

  const [ movieResults, setMovieResults ] = useState([]);
  const [ nominatedList, setNominatedList ] = useState([]);
  const [ showMessage, setShowMessage ] = useState(false);
  const [ disableBtns, setDisableBtns ] = useState(false)
  const [ loading, setLoading ] = useState(false);
  const loader = <img className="App__iconLoader" alt="loading" src="./assets/loading.png" />

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const dismissMessage = () => {
    setShowMessage(false)
  }

  const displayMessage = useCallback(() => {
    setShowMessage(true)
    setTimeout(() => {
      dismissMessage()
    }, [5000])
  }, [])
  
  const findMovies = useCallback(term => {
    setLoading(true)
    let searchTerm = term.split(" ").join("%20");

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=880b9cc1&s=${searchTerm}`)
    .then(r => r.json())
    .then(data => {
      if (data.Response === "True") {
        setLoading(false);
        setMovieResults(data.Search);
      }
    });
  }, [])

  useEffect(() => {
    if (localStorage.getItem("list")) {
      let myList = JSON.parse(localStorage.getItem("list"));
      setNominatedList(myList);
    }
  }, [])

  useEffect(() => {
    if (nominatedList.length === 5) {
      setDisableBtns(true);
      displayMessage();
    } else {
      setDisableBtns(false);
    }
  }, [nominatedList, displayMessage])

  const removeFromNominatedList = movie => {
    const filteredList = nominatedList.filter(mv => mv.imdbID !== movie.imdbID);
    setNominatedList(filteredList);
    localStorage.setItem("list", JSON.stringify(filteredList));
  }

  const addToNominatedList = movie => {
    setNominatedList([...nominatedList, movie]);
    localStorage.setItem("list", JSON.stringify([...nominatedList, movie]));
  }

  return (
    <div className="App">
      <div id="mainWrapper">
        <p className="App__title" id="top">Choose Your Top 5 Movies</p>
        <SearchBar 
          findMovies={findMovies} 
          icon={<FontAwesomeIcon icon={faFilm} size="4x" />} />
        <Nominations 
          nominatedList={nominatedList} 
          removeFromNominatedList={removeFromNominatedList}
          loader={loader} />
          {
            showMessage && 
            <Message 
              header={"All set!"} 
              message={"It seems like you have all of your top 5 movies. You can always remove from your list and choose a new one."} 
              dismissMessage={dismissMessage} />
          }
        <SearchResults
          movieResults={movieResults} 
          addToNominatedList={addToNominatedList} 
          disableBtns={disableBtns}
          loading={loading} 
          loader={loader} />
      </div>

      <span className='App__upbtn' onClick={scrollToTop}> 
        <FontAwesomeIcon className="App__faAngleUp" icon={faAngleUp} size="4x" />
      </span>
    </div>
  );
}

export default App;
