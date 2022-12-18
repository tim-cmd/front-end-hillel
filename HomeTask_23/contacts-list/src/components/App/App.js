import './App.css';

import React, { Component } from 'react';
import {
  deleteContact,
  fetchContactsList,
  insertContact,
} from '../../services/contactsService';

import Form from '../Form/Form';
import List from '../List/List';
import ListHead from '../ListHead/ListHead';

class App extends Component {
  state = {
    list: [],
  };

  createContact = (newContact) => {
    insertContact({
      ...newContact,
    }).then((data) => {
      console.log('created', data);
      this.setState({
        list: [...this.state.list, data],
      });
    });
  };

  removeContact = (id) => {
    deleteContact(id).then(() =>
      this.setState({
        list: this.state.list.filter((item) => item.id !== id),
      })
    );
  };

  componentDidMount() {
    fetchContactsList().then((data) => {
      console.log('list', data);
      this.setState({
        list: data,
      });
    });
  }

  render() {
    return (
      <div className="divTable paleBlueRows">
        <ListHead />
        <List list={this.state.list} onDelete={this.removeContact} />
        <Form onSubmit={this.createContact} />
      </div>
    );
  }
}

export default App;
