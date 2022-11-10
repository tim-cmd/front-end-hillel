class TodoController {
  #todoListView = null;
  #todoFormView = null;
  #todosCollection = null;

  constructor(container) {
    this.#todoListView = new TodoListView({
      onEdit: (id, isItemClick) => this.edit(id, isItemClick),
      onDelete: (id) => this.delete(id),
    });
    container.append(this.#todoListView.uList);

    this.#todoFormView = new TodoFormView({
      onChange: (inputEl, buttonEl) => this.validateForm(inputEl, buttonEl),
      onSubmit: (id, value) => this.save(id, value),
    });
    container.append(this.#todoFormView.form);

    this.#todosCollection = new TodosCollection();
    this.#todosCollection
      .fetchList()
      .then(() => this.#todoListView.renderList(this.#todosCollection.list));
  }

  validateForm(inputEl, buttonEl) {
    const isInvalid = inputEl.value === null || inputEl.value === '';
    inputEl.setCustomValidity(isInvalid ? 'Please enter a title' : '');
    buttonEl.disabled = isInvalid;
  }

  save(id, value) {
    this.#todosCollection.upsert(id, value).then(() => {
      this.#todoFormView.reset();
      this.#todoListView.renderList(this.#todosCollection.list);
    });
  }

  edit(id, isItemClick) {
    if (isItemClick) {
      this.#todosCollection
        .update(id)
        .then(() => this.#todoListView.renderList(this.#todosCollection.list));
    } else {
      this.#todoFormView.setForm(this.#todosCollection.getItem(id));
    }
  }

  delete(id) {
    this.#todosCollection
      .delete(id)
      .then(() => this.#todoListView.renderList(this.#todosCollection.list));
  }
}
