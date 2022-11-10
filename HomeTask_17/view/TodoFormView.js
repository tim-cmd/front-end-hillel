class TodoFormView {
  form = null;
  #inputEl = null;
  #editInput = null;
  #submitBtn = null;
  #config = null;

  static formTemplate = `
    <form id="todoForm">
      <input type="hidden" id="editId" />
      <div id="inputBlock" class="footer">
        <input id="itemInp" type="text" placeholder="Type new Item" />
        <button id="saveBtn" type="submit" class="save-btn">Save</button>
      </div>
    </form>`;

  constructor(config) {
    console.log('TodoFormView init', config);
    this.#config = config;
    this.#initView();
  }

  #initView() {
    const form = document.createElement('form');
    form.id = 'todoForm';

    const editInput = document.createElement('input');
    editInput.type = 'hidden';
    editInput.id = 'editId';
    this.#editInput = editInput;
    form.append(editInput);

    const div = document.createElement('div');
    div.className = 'footer';
    div.id = 'inputBlock';

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'save-btn';
    submitBtn.textContent = 'Save';
    submitBtn.disabled = true;
    this.#submitBtn = submitBtn;

    const mainInput = document.createElement('input');
    mainInput.type = 'text';
    mainInput.placeholder = 'Type new Item';
    mainInput.addEventListener('input', () => this.handleChange());
    this.#inputEl = mainInput;

    div.append(mainInput);
    div.append(submitBtn);
    form.append(div);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveItem(e);
    });

    this.form = form;
  }

  setForm({ id, title }) {
    this.#editInput.value = id;
    this.#inputEl.value = title;
  }

  handleChange() {
    const isInvalid =
      this.#inputEl.value === null || this.#inputEl.value === '';
    this.#inputEl.setCustomValidity(isInvalid ? 'Please enter a title' : '');
    this.#submitBtn.disabled = isInvalid;
  }

  saveItem() {
    this.#config.onSubmit(this.#editInput.value, this.#inputEl.value);
  }

  reset() {
    this.#inputEl.value = '';
    this.#editInput.value = '';
    this.#submitBtn.disabled = true;
  }
}
