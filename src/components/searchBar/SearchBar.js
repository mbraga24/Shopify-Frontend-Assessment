import React from "react";
import { Search } from 'semantic-ui-react'

import './Styles.scss';

const SearchBar = () => {

  return (
    <div className="searchBar">
      <Search 
        className="searchBar__field" 
        placeholder="Search Movies" 
      />
    </div>
  )
}

export default SearchBar;