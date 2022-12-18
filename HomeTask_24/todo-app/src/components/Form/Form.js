import './Form.css';

import React, { useState } from 'react';

import TextField from '../common/TextField/TextField';

function Form({ onSubmit }) {
  const [formState, setFormState] = useState({
    values: {
      title: '',
    },
    touched: {},
    errors: {},
    isValid: false,
  });

  function onInputChange(e) {
    const values = {
      ...formState.values,
      [e.target.name]: e.target.value,
    };
    const errors = validate(values);

    setFormState({
      values,
      errors,
      touched: {
        ...formState.touched,
        [e.target.name]: true,
      },
      isValid: Object.keys(errors).length === 0,
    });
  }

  function validate({ title }) {
    const errors = {};

    if (title === '') {
      errors.title = 'Title is required';
    }

    if (title.length > 25) {
      errors.title = 'Title is too long';
    }

    return errors;
  }

  function onFormSubmit(e) {
    e.preventDefault();

    onSubmit({
      title: e.target.elements.title.value,
    });

    e.target.reset();

    setFormState({
      ...formState,
      values: { title: '' },
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <TextField
        name="title"
        placeholder="Title"
        value={formState.values.title}
        onChange={onInputChange}
        isTouched={formState.touched.title}
        error={formState.errors.title}
      />
      <div>
        <button className="save-btn" disabled={!formState.isValid}>
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
