import React from 'react';

function ListItem({ contact: { id, name, surname, email }, onDelete, onEdit }) {
  return (
    <div className="divTableRow">
      <div className="divTableCell">{name}</div>
      <div className="divTableCell">{surname}</div>
      <div className="divTableCell">{email}</div>
      <div className="divTableCell">
        <button className="edit-btn" onClick={() => onEdit(id)}>
          ✎
        </button>
        <button className="remove-btn" onClick={() => onDelete(id)}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default ListItem;
