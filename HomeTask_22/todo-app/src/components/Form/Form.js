import './Form.css';

import React, { Component } from 'react';

export class Form extends Component {
  onFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.elements.title.value,
    };

    this.props.onSubmit(formData);

    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input name="title" placeholder="title" />
        <button className="save-btn">Save</button>
      </form>
    );
  }
}

export default Form;
