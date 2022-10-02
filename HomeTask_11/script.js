const ITEM_CLASS = 'todo-item';
const REMOVE_BTN_CLASS = 'remove-btn';
const EDIT_BTN_CLASS = 'edit-btn';

const itemTemplate = document.getElementById('liTemplate').innerHTML;

const todoForm = document.getElementById('todoForm');
const inputEl = document.getElementById('itemInp');
const editId = document.getElementById('editId');
const listEl = document.getElementById('uList');
const submitBtm = document.getElementById('saveBtn');

let todoList = [
  { id: 1312312312, label: 'Learn some Java', isChecked: true },
  { id: 4353435646, label: 'Learn some JS', isChecked: false },
];

inputEl.addEventListener('input', onInputChange);
todoForm.addEventListener('submit', onSubmit);
listEl.addEventListener('click', onListItemClick);

init();
disableFormSubmit();

function init() {
  renderList(todoList);
}

function onInputChange() {
  submitBtm.disabled = isFormInvalid(inputEl);
}

function onSubmit(e) {
  e.preventDefault();
  console.log('onSubmit itemId', inputEl);
  if (isFormInvalid(inputEl)) {
    return;
  }
  const item = getFormItem();
  console.log('onSubmit item', item);
  submitItem(item);
  clearInput();
}

function onListItemClick(e) {
  const itemId = getItemId(e.target);
  console.log('list click itemId', itemId);
  if (e.target.classList.contains(REMOVE_BTN_CLASS)) {
    deleteItem(itemId);
  } else {
    editItem(itemId, e.target.classList.contains(ITEM_CLASS));
  }
}

function renderList(list) {
  listEl.innerHTML = list.map(generateItemHtml).join('');
}

function generateItemHtml({ id, label, isChecked }) {
  return itemTemplate
    .replaceAll('{itemId}', id)
    .replaceAll('{itemLabel}', label)
    .replaceAll('{isChecked}', isChecked);
}

function isFormInvalid(el) {
  const isInvalid = el.value === null || el.value === '';
  el.setCustomValidity(isInvalid ? 'Please enter a label' : '');

  return isInvalid;
}

function getItemId(el) {
  return +el.closest('li').dataset.itemId;
}

function clearInput() {
  editId.value = '';
  inputEl.value = '';
  disableFormSubmit();
}

function submitItem(item) {
  console.log('submitItem Id', item.Id);
  if (item.id === 0) {
    insertItem(item);
  } else {
    updateItem(item);
  }
}

function insertItem(item) {
  item.id = Date.now();

  todoList.push(item);
  renderList(todoList);
}

function updateItem(innerItem) {
  todoList.forEach((item) => {
    if (item.id === innerItem.id) {
      item.label = innerItem.label;
    }
  });

  renderList(todoList);
}

function deleteItem(id) {
  console.log('deleteItem', id);
  if (id === +editId.value) {
    clearInput();
  }
  todoList = todoList.filter((item) => item.id !== id);
  renderList(todoList);
}

function editItem(id, isItemClick) {
  console.log('editItem', id, isItemClick);
  const item = todoList.find((item) => item.id === id);
  if (isItemClick) {
    item.isChecked = !item.isChecked;
    renderList(todoList);
  } else {
    setEditValues(item);
  }
}

function getFormItem() {
  return {
    id: +editId.value,
    label: inputEl.value,
    isChecked: false,
  };
}

function setEditValues({ id, label }) {
  editId.value = id;
  inputEl.value = label;
}

function disableFormSubmit() {
  submitBtm.disabled = true;
}
