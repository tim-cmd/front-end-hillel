import './TextField.css';

import React from 'react';

function TextField(props) {
  return (
    <div className={props.isTouched && props.error ? 'invalid-input' : ''}>
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      {props.isTouched && props.error ? (
        <span className="error">{props.error}</span>
      ) : null}
    </div>
  );
}

export default TextField;
