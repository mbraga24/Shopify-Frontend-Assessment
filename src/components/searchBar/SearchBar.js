import React, { useState, useEffect } from "react";
import { Form } from 'semantic-ui-react'

import './Styles.scss';

const SearchBar = ({ findMovies, icon }) => {

  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    findMovies(searchTerm);
  }, [findMovies, searchTerm])

  const handleInput = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="searchBar">
      <span className="searchBar__icon">{icon}</span>
      <Form className="searchBar__field">
        <Form.Input  
          placeholder="Search Movies"
          onChange={handleInput} 
        />
      </Form>
    </div>
  )
}

export default SearchBar;