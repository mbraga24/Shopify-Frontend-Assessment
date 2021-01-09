import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

import './Styles.scss';

const ButtonProp = ({ color, btnName, icon, handleSubmit, disable = false }) => {
  return (
    <Button 
      color={color}
      disabled={disable}
      className="buttonProp"
      onClick={handleSubmit}
    >
      <Icon name={icon} />
      {btnName}
    </Button>
  )
}

export default ButtonProp;