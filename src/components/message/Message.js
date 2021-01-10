import React from 'react';
import { Message } from 'semantic-ui-react'

import './Styles.scss';

const ButtonProp = ({ header, message, dismissMessage }) => {

  const handleDismiss = () => {
    dismissMessage();
  }

  return (
    <Message
      className="message"
      positive
      onDismiss={handleDismiss}
    >
      <Message.Header>{header}</Message.Header>
      <p className="message__text">{message}</p>
    </Message>
  )
}

export default ButtonProp;