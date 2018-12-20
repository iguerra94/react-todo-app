import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.retrieveAllTasks();
  }

  retrieveAllTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.setState({ tasks });
  }

  completeTask = (e) => {
    //extract the id from the button id's attribute
    //this is the id of the task to complete
    const taskFoundId = parseInt(e.target.id.split("-")[2]);

    let tasks = JSON.parse(localStorage.getItem("tasks"));
    const task = tasks.find(task => task.id === taskFoundId);
    // position of the task in the tasks array
    const taskId = tasks.findIndex(task => task.id === taskFoundId);
    
    if (task) {
      const { id, content } = task;
      // task is not done yet
      if (!task.done) {
        const completedTask = {
          id, content, 
          done: true
        }
        tasks[taskId] = completedTask;
      } else {
        tasks = tasks.filter((task) => task.id !== taskFoundId);
      }
     
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.setState({ tasks });
    }
  }

  addTask = () => {
    const newTaskContent = document.getElementById('inputNewTask').value;

    if (newTaskContent.length > 3) {
      const newTask = { 
        id: this.state.tasks ? this.state.tasks.length : 0,
        content: newTaskContent,
        done: false
      }

      const tasks = this.state.tasks ? [...this.state.tasks, newTask] : [newTask];
      localStorage.setItem("tasks", JSON.stringify(tasks));

      this.setState({ tasks });
    } else {
      alert("The task must have more than 3 characters.")
    }
    document.getElementById('inputNewTask').value = "";
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        retrieveAllTasks: this.retrieveAllTasks,
        addTask: this.addTask,
        completeTask: this.completeTask
      }}>
        {this.props.children}
      </MyContext.Provider>  
    );
  }
}

export default MyProvider;