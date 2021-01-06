import React from "react";
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

import _ from 'lodash'
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