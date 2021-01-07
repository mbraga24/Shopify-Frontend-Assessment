import React, { useState, useEffect } from "react";
import { Form } from 'semantic-ui-react'

import './Styles.scss';

const SearchBar = ({ findMovies, icon }) => {

  const [ searchTerm, setSearchTerm ] = useState("")

  useEffect(() => {
    findMovies(searchTerm)
  }, [findMovies, searchTerm])

  const handleInput = e => {
    setSearchTerm(e.target.value)
  }

  // console.log("searchTerm -->", searchTerm)
  return (
    <div className="searchBar">
      {icon}
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