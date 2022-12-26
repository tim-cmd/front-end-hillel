import React from 'react';
import useForm from '../hooks/useForm';

function Form({ contact }) {
  const [onFormSubmit] = useForm();

  return (
    <div className="divTableFoot tableFootStyle">
      <form className="divTableRow" onSubmit={onFormSubmit}>
        <div className="divTableCell">
          <input name="id" type="hidden" defaultValue={contact && contact.id} />
          <input
            name="name"
            placeholder="name"
            type="text"
            defaultValue={contact && contact.name}
          />
        </div>
        <div className="divTableCell">
          <input
            name="surname"
            placeholder="surname"
            type="text"
            defaultValue={contact && contact.surname}
          />
        </div>
        <div className="divTableCell">
          <input
            name="email"
            placeholder="email"
            type="text"
            defaultValue={contact && contact.email}
          />
        </div>
        <div className="divTableCell">
          <button className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
