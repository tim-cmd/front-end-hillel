class Accordion {
  static CLASSES = {
    ITEM: 'accordion-item',
    TITLE: 'accordion-title',
    BODY: 'accordion-body',
    ACTIVE_BODY: 'accordion-body-active',
    ACTIVE_TITLE: 'accordion-title-active',
  };

  #el = null;

  constructor(el) {
    this.#el = el;
    this.#bindEventListeners();
  }

  #bindEventListeners() {
    this.#el.addEventListener('click', (e) => {
      if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
        this.#toggleTitle(e.target);
        this.#toggleBody(e.target.nextElementSibling);
      }
    });
  }

  #toggleTitle(el) {
    el.classList.toggle(Accordion.CLASSES.ACTIVE_TITLE);
  }

  #toggleBody(el) {
    el.classList.toggle(Accordion.CLASSES.ACTIVE_BODY);
  }
}
