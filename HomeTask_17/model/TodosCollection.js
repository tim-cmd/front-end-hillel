class TodosCollection {
  #api = null;
  list = [];

  constructor() {
    this.#api = new RestApi(
      'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/'
    );
  }

  fetchList() {
    return this.#api.getList().then((data) => (this.list = data));
  }

  getItem(id) {
    return this.list.find((item) => item.id === id);
  }

  upsert(id, value) {
    return id ? this.update(id, value) : this.create(value);
  }

  create(value) {
    return this.#api
      .create({ title: value })
      .then((newItem) => (this.list = [...this.list, newItem]));
  }

  update(id, newTitle) {
    const item = this.list.find((item) => item.id === id);
    const updatedItem = { ...item };
    if (newTitle) {
      updatedItem.title = newTitle;
    } else {
      updatedItem.isDone = !item.isDone;
    }

    return this.#api.update(updatedItem).then(() => {
      this.list = this.list.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
    });
  }

  delete(id) {
    return this.#api.delete(id).then(() => {
      this.list = this.list.filter((item) => item.id !== id);
    });
  }
}
