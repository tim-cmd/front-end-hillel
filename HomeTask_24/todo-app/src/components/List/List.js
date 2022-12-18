import './List.css';

import ListItem from '../ListItem/ListItem';
import React from 'react';

function List({ list, onToggle, onDelete }) {
  return (
    <ul className="list">
      {list.map((item) => (
        <ListItem
          key={item.id}
          todo={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default List;
