import React from 'react';
import { createTodo } from '../store/actions/todos';
import { useDispatch } from 'react-redux';

function TodoForm({ onCreate }) {
  const dispatch = useDispatch();

  function onFormSubmit(e) {
    e.preventDefault();
    dispatch(createTodo(e.target.elements.title.value));
    e.target.reset();
  }
  return (
    <div className="row">
      <form onSubmit={onFormSubmit}>
        <div className="ten columns">
          <input type="text" className="u-full-width" name="title" />
        </div>
        <div className="two columns">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
