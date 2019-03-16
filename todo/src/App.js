import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';
import './App.css';

// 함수를 선언후 바로 호출하는, IIFE 패턴
const bulkTodos = (() => {
  const array = [];
  for (let i = 0; i < 5000; i++) {
    array.push({
      id: i,
      text: `Todo #${i}`,
      checked: false
    });
  }
  return array;
})();

class App extends Component {

  id = 5000;
  state = {
    // todos: [
    //   {
    //     id: 0,
    //     text: '할일 이것 1',
    //     checked: true
    //   },
    //   {
    //     id: 1,
    //     text: '할일 이것 2',
    //     checked: false
    //   },
    //   {
    //     id: 2,
    //     text: '할일 이것 3',
    //     checked: false
    //   }
    // ]
    todos: bulkTodos
  }

  handleCreate = text => {
    const todoData = {
      id: this.id++,
      text,
      checked: false,
    }
    this.setState({
      todos: this.state.todos.concat(todoData)
    })
  }

  handleCheck = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
    });
  };

  handleRemove = id => {
    const { todos } = this.state;
    const nextTodos = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: nextTodos
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white box">
          <TodoList
            todos={todos}
            onCheck={this.handleCheck}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
