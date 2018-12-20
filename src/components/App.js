import React from 'react';

import MyProvider from '@/context/MyContext';

import TextInput from '@/components/text-input';
import Button from '@/components/button';
import Tasks from '@/components/tasks';

const App = () => (
  <MyProvider>
    <React.Fragment>
      <TextInput
        type="text"
        placeholder="Add new task.."
        />
      <Button content="Agregar" />
    </React.Fragment>
    <Tasks />
  </MyProvider>
)

export default App;