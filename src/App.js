import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoCreator from './components/TodoCreator'
const todos = [
  {description:'Learn JS', isDone:true},
  {description:'Learn React', isDone:false}
]
class App extends Component {
  state = {
    todos
  }
  render() {
    return (
      <div className="App">
        <TodoCreator onTodoCreate={this.createTodo}/>
        <TodoList todos = {this.state.todos} onTodoCreate = {this.createTodo} />
      </div>
    );
  }
  createTodo = (todo) => {
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({
      todos
    })
  }
}

export default App;
