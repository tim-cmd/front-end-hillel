import './ListItem.css';

import React, { Component } from 'react';

export class ListItem extends Component {
  onDeleteClick = (e) => {
    e.stopPropagation();

    this.props.onDelete(this.props.contact.id);
  };

  render() {
    return (
      <div className="divTableRow">
        <div className="divTableCell">{this.props.contact.name}</div>
        <div className="divTableCell">{this.props.contact.surname}</div>
        <div className="divTableCell">{this.props.contact.email}</div>
        <div className="divTableCell">
          <button className="remove-btn" onClick={this.onDeleteClick}>
            ✖
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
