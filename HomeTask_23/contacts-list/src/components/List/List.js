import './List.css';

import React, { Component } from 'react';

import ListItem from '../ListItem/ListItem';

export class List extends Component {
  render() {
    return (
      <div className="divTableBody">
        {this.props.list.map((item) => (
          <ListItem
            key={item.id}
            contact={item}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default List;
