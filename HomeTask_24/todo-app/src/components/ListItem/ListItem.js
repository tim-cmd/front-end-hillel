import './ListItem.css';

import React from 'react';

function ListItem({ todo, onToggle, onDelete }) {
  function onElementClick() {
    onToggle(todo.id);
  }

  function onDeleteClick(e) {
    e.stopPropagation();

    onDelete(todo.id);
  }

  return (
    <li
      className={'item' + (todo.isDone ? ' done' : '')}
      onClick={onElementClick}
    >
      {todo.title}
      <button className="remove-btn" onClick={onDeleteClick}>
        X
      </button>
    </li>
  );
}

export default ListItem;
