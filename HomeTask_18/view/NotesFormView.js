class NotesFormView {
  el = null;
  #formInput = '';
  #config = null;

  static formTemplate = `
  <form class="new-note-form">
    <button type="submit" class="add-btn">New Note</button>
  </form>`;

  constructor(config) {
    console.log('NotesFormView init', config);
    this.#config = config;
    this.#initView();
  }

  #initView() {
    this.el = htmlToElement(NotesFormView.formTemplate);

    this.el.addEventListener('submit', (e) => {
      console.log('handle change', e.target);
      this.submitForm(e);
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.#config.onSubmit(this.#formInput);
  }
}
