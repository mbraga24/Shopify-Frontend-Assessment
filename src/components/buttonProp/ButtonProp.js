import React from 'react';
import { Button } from 'semantic-ui-react'

import './Styles.scss';

const ButtonProp = ({ color, btnName, handleSubmit }) => {

  return (
    <Button 
      color={color} 
      className="ButtonProp"
      onClick={handleSubmit}
      >
      {btnName}
    </Button>
  )
}

export default ButtonProp;