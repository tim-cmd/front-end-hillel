import './App.css';

import React, { Component } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

class App extends Component {
  state = {
    list: [
      { id: 1, title: 'Item 10', isDone: false },
      { id: 2, title: 'Item 20', isDone: true },
      { id: 3, title: 'Item 30', isDone: false },
    ],
  };

  toggleTodo = (id) => {
    this.setState({
      list: this.state.list.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              isDone: !item.isDone,
            }
      ),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  createTodo = ({ title }) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      isDone: false,
    };
    this.setState({
      list: [...this.state.list, newTodo],
    });
  };

  render() {
    return (
      <>
        <List
          list={this.state.list}
          onToggle={this.toggleTodo}
          onDelete={this.deleteTodo}
        />
        <Form onSubmit={this.createTodo} />
      </>
    );
  }
}

export default App;
