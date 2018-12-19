import React from 'react';

const Button = ({onClick, content, icon}) => (
  <button type="button" onClick={onClick}>{icon} {content}</button>
);

export default Button;