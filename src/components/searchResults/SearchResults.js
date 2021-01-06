import React from "react";
import { List, Button } from 'semantic-ui-react'

import './Styles.scss';

const SearchResults = () => {
  return (
    <div className="searchResults">
      <List divided relaxed>
        <List.Item>
          <div className="searchResults__alignItems">
            <List.Content className="searchResults__listContent">
              <List.Icon name='film' size='large' verticalAlign='middle' />
              <div>
                <List.Header as='a'>Harry Potter</List.Header>
                <List.Description as='a'>2006</List.Description>
              </div>
            </List.Content>
            <Button color='blue' size="tiny">Nominate</Button>
          </div>
        </List.Item>
      </List>
    </div>
  )
}

export default SearchResults;