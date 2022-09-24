const addBtn = document.getElementById('addBtn');
const inputEl = document.getElementById('itemInp');
const listEl = document.getElementById('uList');

addBtn.addEventListener('click', onAddClick);
inputEl.addEventListener('keydown', (ev) => {
  if (ev.code === 'Enter') onAddClick();
});

function onAddClick() {
  console.log('onAddClick');
  if (isValidated(inputEl)) {
    addNewItem(inputEl.value);
    clearInput();
  }
}

function isValidated(el) {
  console.log('isValidated ' + el.value);
  const isValid = el.value !== null && el.value !== '';
  el.setCustomValidity(isValid ? '' : 'Invalid field');

  return isValid;
}

function clearInput() {
  inputEl.value = '';
}

function addNewItem(input) {
  const itemEl = createListItem(input);
  listEl.appendChild(itemEl);
  itemEl.addEventListener('click', () => itemEl.classList.toggle('checked'));

  const spanEl = createRemoveSpan();
  itemEl.appendChild(spanEl);
  spanEl.addEventListener('click', () => itemEl.remove());
}

function createListItem(val) {
  const itemEl = document.createElement('li');
  itemEl.textContent = val;

  return itemEl;
}

function createRemoveSpan() {
  const spanEl = document.createElement('span');
  spanEl.classList.add('close');
  spanEl.textContent = '\u00D7';

  return spanEl;
}
