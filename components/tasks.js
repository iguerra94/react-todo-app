import React from 'react';

import Task from '@/components/task';

const Tasks = ({tasks}) => (
  <ul>
  {
    tasks ? tasks.map((task, index) => (
      <Task 
        key={index} 
        {...task}
        />
    )) :
    <h2>No tasks...</h2>
  }
  </ul>
);

export default Tasks;