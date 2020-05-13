import React from 'react';
import ShowTask from './ShowTask'
import { Component } from 'react';
import AddTask from './AddTask'

class App extends Component {

  state = {
    todos : [
        
    ]
}

modifyTodos = (task) => {
 task.id = Math.random();
 console.log(task)
 let todos = [task, ...this.state.todos]
 this.setState({
   todos
 })
}

deleteTask = (id) =>{
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  });
  this.setState({
    todos
  });
}
render(){
  return (
    <div className="todo-app">
      <h2 className="center pink-text">Todo List</h2>
      <ShowTask tasks= { this.state.todos}  deleteTask={ this.deleteTask}  />
      <AddTask modifyTodos= {this.modifyTodos}/>
    </div>
   )
 } 
}
export default App
