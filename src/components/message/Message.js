import React from 'react';
import { Message } from 'semantic-ui-react'

import './Styles.scss';

const ButtonProp = ({ header, message, dismissMessage }) => {

  const handleDismiss = () => {
    dismissMessage();
  }

  return (
    <Message
      positive
      onDismiss={handleDismiss}
      header={header}
      content={message}
    />
  )
}

export default ButtonProp;