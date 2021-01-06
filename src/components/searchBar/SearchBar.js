import React, { useState, useEffect } from "react";
import { Form } from 'semantic-ui-react'

import './Styles.scss';

const SearchBar = ({ findMovies }) => {

  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    findMovies(searchTerm)
  }, [searchTerm])

  const handleInput = e => {
    setSearchTerm(e.target.value)
  }

  console.log("searchTerm -->", searchTerm)
  return (
    <div className="searchBar">
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