import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filter: 'all', // 'all', 'completed', 'incomplete'
      newTask: ''
    };
  }

  componentDidMount() {
    console.log('TodoApp component has been mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks || prevState.filter !== this.state.filter) {
      console.log('Tasks or filter has been updated.');
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  addTask = () => {
    if (this.state.newTask.trim()) {
      const newTask = { id: Date.now(), text: this.state.newTask, completed: false };
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask],
        newTask: ''
      }));
    }
  }

  toggleTaskCompletion = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  }

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  getFilteredTasks = () => {
    const { tasks, filter } = this.state;
    if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    if (filter === 'incomplete') {
      return tasks.filter(task => !task.completed);
    }
    return tasks;
  }

  render() {
    const filteredTasks = this.getFilteredTasks();

    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={this.addTask}>Add</button>
        <div className="filter-buttons">
          <button onClick={() => this.setFilter('all')}>All</button>
          <button onClick={() => this.setFilter('completed')}>Completed</button>
          <button onClick={() => this.setFilter('incomplete')}>Incomplete</button>
        </div>
        <ul className="task-list">
          {filteredTasks.map(task => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => this.toggleTaskCompletion(task.id)}
              />
              {task.text}
              <button onClick={() => this.deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;