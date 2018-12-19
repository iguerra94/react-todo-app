import React, { Component } from 'react';

import TextInput from '@/components/text-input';
import Button from '@/components/button';
import Tasks from '@/components/tasks';

class App extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.setState({ tasks });
  }

  addTask = () => {
    const newTaskContent = document.getElementById('inputNewTask').value;

    if (newTaskContent.length > 3) {
      const newTask = { 
        content: newTaskContent,
        done: false
      }
  
      document.getElementById('inputNewTask').value = "";

      const tasks = this.state.tasks ? [...this.state.tasks, newTask] : [newTask];
      localStorage.setItem("tasks", JSON.stringify(tasks));

      this.setState({ tasks });
    }
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <TextInput
            type="text"
            placeholder="Add new task.."
            />
          <Button 
            content="Agregar" 
            onClick={this.addTask} 
            />
        </React.Fragment>
        <Tasks 
          tasks={this.state.tasks}
          />
      </React.Fragment>
    );
  }
}

export default App;