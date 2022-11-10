class TodoListView {
  static CLASSES = {
    TODO_ITEM_CLASS: 'todo-item',
    REMOVE_BTN_CLASS: 'remove-btn',
  };
  static todoListContainerTemplate = `<ul id="uList"></ul>`;

  static todoItemTemplate = `
    <li class="todo-item" data-item-id="{itemId}" data-is-checked="{isDone}">
        {itemLabel}
        <button type="button" class="edit-btn">&#9998</button>
        <button type="button" class="remove-btn">&#10006</button>
    </li>`;

  uList = null;
  form = null;
  #config = null;

  static generateTodoItemHtml({ id, title, isDone }) {
    return TodoListView.todoItemTemplate
      .replaceAll('{itemId}', id)
      .replaceAll('{itemLabel}', title)
      .replaceAll('{isDone}', isDone);
  }

  static getItemId(uList) {
    return uList.closest('li').dataset.itemId;
  }

  constructor(config) {
    console.log('TodoListView init', config);
    this.#config = config;
    this.#initView();
  }

  #initView() {
    const uList = document.createElement('ul');
    uList.id = 'uList';

    uList.addEventListener('click', (e) => {
      console.log('list click itemId', TodoListView.getItemId(e.target));

      if (e.target.classList.contains(TodoListView.CLASSES.REMOVE_BTN_CLASS)) {
        const todoId = TodoListView.getItemId(e.target);
        this.deleteItem(todoId);
      } else {
        this.editItem(
          TodoListView.getItemId(e.target),
          e.target.classList.contains(TodoListView.CLASSES.TODO_ITEM_CLASS)
        );
      }
    });
    this.uList = uList;
  }

  renderList(list) {
    this.uList.innerHTML = list.map(TodoListView.generateTodoItemHtml).join('');
  }

  editItem(id, isItemClick) {
    this.#config.onEdit(id, isItemClick);
  }

  deleteItem(id) {
    this.#config.onDelete(id);
  }
}
