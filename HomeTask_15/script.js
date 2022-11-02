const ITEM_CLASS = 'todo-item';
const REMOVE_BTN_CLASS = 'remove-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const TODO_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

const itemTemplate = document.getElementById('liTemplate').innerHTML;

const todoForm = document.getElementById('todoForm');
const inputEl = document.getElementById('itemInp');
const editId = document.getElementById('editId');
const listEl = document.getElementById('uList');
const submitBtm = document.getElementById('saveBtn');

let todoList = [];

inputEl.addEventListener('input', onInputChange);
todoForm.addEventListener('submit', onSubmit);
listEl.addEventListener('click', onListItemClick);

init();
disableFormSubmit();

function init() {
  fetchTodoList();
  renderList();
}

function fetchTodoList() {
  fetch(TODO_ENDPOINT)
    .then((response) => (response.status === 200 ? response.json() : []))
    .then((data) => {
      console.log('Success:', data);
      todoList = data;
      renderList();
    })
    .catch((error) => {
      alert('TODO request error: ' + error);
    });
}

function onInputChange() {
  submitBtm.disabled = isFormInvalid(inputEl);
}

function onSubmit(e) {
  e.preventDefault();
  if (isFormInvalid(inputEl)) {
    return;
  }
  const item = getFormItem();
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

function renderList() {
  listEl.innerHTML = todoList.map(generateItemHtml).join('');
}

function generateItemHtml({ id, title, completed }) {
  return itemTemplate
    .replaceAll('{itemId}', id)
    .replaceAll('{itemLabel}', title)
    .replaceAll('{isChecked}', completed);
}

function isFormInvalid(el) {
  const isInvalid = el.value === null || el.value === '';
  el.setCustomValidity(isInvalid ? 'Please enter a title' : '');

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
  if (item.id === 0) {
    insertItem(item);
  } else {
    updateItem(item);
  }
}

function insertItem(item) {
  item.id = Date.now();

  todoList.unshift(item);
  renderList();
}

function updateItem(innerItem) {
  todoList.forEach((item) => {
    if (item.id === innerItem.id) {
      item.title = innerItem.title;
    }
  });

  renderList();
}

function deleteItem(id) {
  if (id === +editId.value) {
    clearInput();
  }
  todoList = todoList.filter((item) => item.id !== id);
  renderList();
}

function editItem(id, isItemClick) {
  const item = todoList.find((item) => item.id === id);
  if (isItemClick) {
    item.completed = !item.completed;
    renderList();
  } else {
    setEditValues(item);
  }
}

function getFormItem() {
  return {
    id: +editId.value,
    title: inputEl.value,
    completed: false,
  };
}

function setEditValues({ id, title }) {
  editId.value = id;
  inputEl.value = title;
}

function disableFormSubmit() {
  submitBtm.disabled = true;
}
