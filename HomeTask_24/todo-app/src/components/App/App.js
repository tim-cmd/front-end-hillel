import './App.css';

import React, { useEffect, useState } from 'react';
import {
  addTodo,
  getTodoList,
  removeTodo,
  updateTodo,
} from '../../services/todosService';

import Form from '../Form/Form';
import List from '../List/List';

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodoList().then(setTodoList);
  }, []);

  function toggleTodo(id) {
    const todo = todoList.find((item) => item.id === id);

    updateTodo({ ...todo, isDone: !todo.isDone }).then((data) => {
      setTodoList(todoList.map((item) => (item.id !== id ? item : data)));
    });
  }

  function deleteTodo(id) {
    removeTodo(id).then(() =>
      setTodoList(todoList.filter((item) => item.id !== id))
    );
  }

  function createTodo(newTodo) {
    addTodo({
      ...newTodo,
      isDone: false,
    }).then((data) => {
      setTodoList([...todoList, data]);
    });
  }

  return (
    <>
      <List list={todoList} onToggle={toggleTodo} onDelete={deleteTodo} />
      <Form onSubmit={createTodo} />
    </>
  );
}

export default App;
