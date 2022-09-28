const EDIT_BTN_CLASS = 'edit-btn';
const DELETE_BTN_CLASS = 'del-btn';

const rowTemplate = document.querySelector('#rowTemplate').innerHTML;
const formEl = document.querySelector('#editForm');
const formInputs = document.querySelectorAll('input');
const dataTable = document.querySelector('#dataTable');
const submitBtm = document.querySelector('#submitBtm');

let isEditing = false;
let editRowEl = null;

formInputs.forEach((input) => input.addEventListener('input', onInputsChange));
formEl.addEventListener('submit', onFormSubmit);
dataTable.addEventListener('click', onRowClick);

disableFormSubmit();
generateData(10);

function generateData(count) {
  for (let i = 0; i < count; i++) {
    addNewRow(prepareContact(`John ${i}`, `Doe ${i}`, `0232302320${i}`));
  }
}

function onInputsChange() {
  submitBtm.disabled = isFormInvalid();
}

function onFormSubmit(event) {
  console.log('submited');
  event.preventDefault();
  if (isFormInvalid()) {
    return;
  }
  const contact = getFormData();
  if (isEditing) {
    updateRow(contact);
  } else {
    addNewRow(contact);
  }
  resetFormData();
}

function onRowClick(event) {
  if (event.target.classList.contains(EDIT_BTN_CLASS)) {
    editContact(event.target.parentElement.parentElement);
  }
  if (event.target.classList.contains(DELETE_BTN_CLASS)) {
    removeContact(event.target.parentElement.parentElement);
  }
}

function isFormInvalid() {
  let isInvalid = false;
  formInputs.forEach((input) => {
    if (!isValidated(input)) isInvalid = true;
  });
  console.log('isInvalid ' + isInvalid);

  return isInvalid;
}

function isValidated(el) {
  const isValid = el.value !== null && el.value !== '';
  el.setCustomValidity(isValid ? '' : 'Invalid field');
  return isValid;
}

function getFormData() {
  const con = prepareContact();
  formInputs.forEach((input) => {
    con[input.id] = input.value;
  });
  return con;
}

function resetFormData() {
  formInputs.forEach((input) => (input.value = ''));
  disableFormSubmit();
}

function addNewRow(contact) {
  const itemHtml = generateNewRowHtml(contact);
  dataTable.insertAdjacentHTML('beforeend', itemHtml);
}

function generateNewRowHtml({ firstName, lastName, phoneNum }) {
  let newRowEl = rowTemplate
    .replaceAll('{firstName}', firstName)
    .replaceAll('{lastName}', lastName)
    .replaceAll('{phoneNum}', phoneNum);
  return newRowEl;
}

function updateRow({ firstName, lastName, phoneNum }) {
  isEditing = false;
  const rowData = editRowEl.children;

  rowData[0].textContent = firstName;
  rowData[1].textContent = lastName;
  rowData[2].textContent = phoneNum;
}

function editContact(rowEl) {
  console.log('editContact: ', rowEl);
  isEditing = true;
  editRowEl = rowEl;

  const rowData = rowEl.children;

  formInputs[0].value = rowData[0].textContent;
  formInputs[1].value = rowData[1].textContent;
  formInputs[2].value = rowData[2].textContent;
}

function removeContact(rowEl) {
  if (rowEl === editRowEl) {
    resetFormData();
  }
  rowEl.remove();
}

function prepareContact(fName, lName, pNum) {
  return {
    firstName: fName,
    lastName: lName,
    phoneNum: pNum,
  };
}

function disableFormSubmit() {
  submitBtm.disabled = true;
}
