import ListItem from './ListItem';
import React from 'react';

function List({ contacts, onDelete, onEdit }) {
  return (
    <div className="divTableBody">
      {contacts.map((item) => (
        <ListItem
          key={item.id}
          contact={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default List;
