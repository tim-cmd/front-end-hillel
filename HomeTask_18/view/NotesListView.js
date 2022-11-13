class NotesListView {
  static CLASSES = {
    BOARD_CLASS: 'notes-board',
    NOTE_ITEM_CLASS: 'note-item',
    NOTE_TEXT_CLASS: 'note-descr',
    REMOVE_BTN_CLASS: 'remove-btn',
  };

  static boardTemplate = `<div class="notes-board"></div>`;

  static noteItemTemplate = `
  <div class="note-item" data-item-id="{itemId}" style="background-color:{color}">
    <button type="button" class="remove-btn">Remove</button>
    <textarea class="note-descr">{description}</textarea>
  </div>`;

  el = null;
  #config = null;

  static generateItemHtml({ id, description }) {
    return NotesListView.noteItemTemplate
      .replaceAll('{itemId}', id)
      .replaceAll('{description}', description)
      .replaceAll('{color}', NotesListView.randomColor());
  }

  static randomColor() {
    const r = 200 + Math.floor(Math.random() * 56);
    const g = 200 + Math.floor(Math.random() * 56);
    const b = 200 + Math.floor(Math.random() * 56);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  static getItemId(el) {
    return el.closest('div').dataset.itemId;
  }

  constructor(config) {
    console.log('NotesListView init', config);
    this.#config = config;
    this.#initView();
  }

  #initView() {
    this.el = htmlToElement(NotesListView.boardTemplate);

    this.el.addEventListener('click', (e) => {
      if (e.target.classList.contains(NotesListView.CLASSES.REMOVE_BTN_CLASS)) {
        console.log('handle delete', e.target);
        this.deleteItem(NotesListView.getItemId(e.target));
      }
    });

    this.el.addEventListener('change', (e) => {
      if (e.target.classList.contains(NotesListView.CLASSES.NOTE_TEXT_CLASS)) {
        console.log('handle change', e.target);
        this.updateItem(NotesListView.getItemId(e.target), e.target.value);
      }
    });
  }

  renderList(list) {
    this.el.innerHTML = list.map(NotesListView.generateItemHtml).join('');
  }

  updateItem(id, value) {
    this.#config.onEdit(id, value);
  }

  deleteItem(id) {
    this.#config.onDelete(id);
  }
}
