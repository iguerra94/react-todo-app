import React from 'react';

import { MyContext } from '@/context/MyContext';

const Button = ({content, icon, taskBtn, id}) => (
  <MyContext.Consumer>
    {(context) => <button id={id >= 0 ? `task-btn-${id}`: 'btn'} type="button" onClick={taskBtn ? context.completeTask : context.addTask}>{icon} {content}</button>}
  </MyContext.Consumer>
);

export default Button;