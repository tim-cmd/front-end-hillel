import React from 'react';

function TodoForm({ onCreate }) {
  function onFormSubmit(e) {
    e.preventDefault();

    onCreate({
      title: e.target.elements.title.value,
    });

    e.target.reset();
  }
  return (
    <div className="row">
      <form onSubmit={onFormSubmit}>
        <div className="ten columns">
          <input type="text" className="u-full-width" name="title" />
        </div>
        <div className="two columns">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
