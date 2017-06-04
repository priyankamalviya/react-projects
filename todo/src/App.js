import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todohelpers';
import {pipe, partial} from './lib/utils';


class App extends Component {

  state = {
    todos:[
      {id: 1, name: 'Learn JSX', isComplete: true},
      {id: 2, name: 'Build a TODO app', isComplete: false}
    ],
    currentTodo: ''
  }

  handleRemove = (id, event) => {
    event.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({todos:updatedTodos})
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo:event.target.value
    })
  }

  handleSubmit = (event) =>{
    /*This is to prevent page reload*/
      event.preventDefault();
      const newId = generateId();
      const newTodo ={id: newId, name: this.state.currentTodo, isComplete: false}

      const updatedTodos = addTodo(this.state.todos, newTodo)

      this.setState({
        todos: updatedTodos,
        currentTodo: '',
        errorMessage: ''
      })
  }

  handleEmptySubmit = (event) =>{
    event.preventDefault()
    this.setState({
      errorMessage:"Please insert some task to add"
    })
  }

  handleToggle = (id) =>{
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = getUpdatedTodos(id, this.state.todos);
    this.setState({todos: updatedTodos})
  }
  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React To Do</h2>
        </div>
        <div className="Todo-App">
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} handleSubmit={submitHandler}/>
          <TodoList handleToggle = {this.handleToggle}
          todos={this.state.todos}
          handleRemove={this.handleRemove}/>
        </div>
      </div>
    );
  }
}

export default App;
