import React from 'react';

import Task from '@/components/task';
import { MyContext } from '@/context/MyContext';

const Tasks = () => (
  <MyContext.Consumer>
    {
      (context) => context.state.tasks.length > 0 ? 
        <ul>
          {
            context.state.tasks.map((task, index) => (
              <Task 
                key={index} 
                {...task}
                />
            ))
          }
        </ul> :
      <h2>No tasks...</h2>
    }
  </MyContext.Consumer>
);

export default Tasks;