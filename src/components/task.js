import React from 'react';

import Button from '@/components/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({ content, done, id }) => (
  <li>
    <span>{content}</span>
    {
      done ? 
        <Button 
          icon={<FontAwesomeIcon icon={faTimes} />} 
          content="borrar"
          taskBtn={true}
          id={id}
        /> :
        <Button 
          icon={<FontAwesomeIcon icon={faCheck} />} 
          content="done"
          taskBtn={true}
          id={id}
        />
    }
  </li>
);

export default Task;