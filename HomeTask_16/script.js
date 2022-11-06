const EDIT_BTN_CLASS = 'edit-btn';
const DELETE_BTN_CLASS = 'del-btn';
const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const CONTACT_ITEM_SELECTOR = '.contact-item';

const rowTemplate = document.querySelector('#rowTemplate').innerHTML;
const formElem = document.querySelector('#editForm');
const formInputs = document.querySelectorAll('input');
const dataTable = document.querySelector('#dataTable');
const submitBtn = document.querySelector('#submitBtn');
const resetBtn = document.querySelector('#resetBtm');
const refreshBtn = document.querySelector('#refreshBtm');

let editId = null;

let contactsList = [];

formInputs.forEach((input) => input.addEventListener('input', onInputsChange));
formElem.addEventListener('submit', onFormSubmit);
resetBtn.addEventListener('click', resetFormData);
refreshBtn.addEventListener('click', fetchContactsList);
dataTable.addEventListener('click', onRowClick);

init();

function init() {
  disableFormSubmit();
  fetchContactsList();
}

function onInputsChange() {
  submitBtn.disabled = isFormInvalid();
}

function onFormSubmit(event) {
  console.log('submited');
  event.preventDefault();
  if (isFormInvalid()) {
    return;
  }
  const contactData = getFormData();
  console.log('contactData', contactData);
  saveContact(contactData);
}

function onRowClick(event) {
  const contactId = getContactId(event.target);

  if (event.target.classList.contains(EDIT_BTN_CLASS)) {
    editContact(contactId);
  }
  if (event.target.classList.contains(DELETE_BTN_CLASS)) {
    removeContact(contactId);
  }
}

function getContactId(el) {
  return el.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
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
  el.setCustomValidity(isValid ? '' : 'Please enter a value');
  return isValid;
}

function getFormData() {
  const contact = { name: null, surname: null, email: null };
  formInputs.forEach((input) => {
    contact[input.id] = input.value;
  });
  return contact;
}

function resetFormData() {
  editId = null;
  formElem.reset();
  disableFormSubmit();
}

function renderList() {
  dataTable.innerHTML = contactsList.map(generateRowHtml).join('');
}

function generateRowHtml({ id, name, surname, email }) {
  let newRowEl = rowTemplate
    .replace('{id}', id)
    .replace('{name}', name)
    .replace('{surname}', surname)
    .replace('{email}', email);
  return newRowEl;
}

function disableFormSubmit() {
  submitBtn.disabled = true;
}

function editContact(id) {
  console.log('editContact: ', id);
  editId = id;
  const contact = contactsList.find((item) => item.id === id);
  setFormValues(contact);
}

function setFormValues({ name, surname, email }) {
  formInputs[0].value = name;
  formInputs[1].value = surname;
  formInputs[2].value = email;
}

function fetchContactsList() {
  fetch(API_URL)
    .then((resp) => (isSuccess(resp) ? resp.json() : []))
    .then((data) => {
      console.log('Success:', data);
      contactsList = data;
    })
    .catch((error) => {
      alert('GET request fail: ' + error);
    })
    .finally(renderList);
}

function isSuccess(response) {
  return response.status >= 200 && response.status <= 299;
}

function saveContact(contact) {
  if (editId === null) {
    createContact(contact);
  } else {
    updateContact(editId, contact);
  }
}

function createContact(contact) {
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (!isSuccess(resp)) {
        throw 'Status Code ' + resp.status;
      }
      return resp.json();
    })
    .then((data) => {
      console.log('POST resp', data);
      contactsList = [...contactsList, data];
      resetFormData();
    })
    .catch((error) => {
      alert('POST request error: ' + error);
    })
    .finally(renderList);
}

function updateContact(id, contactUpd) {
  fetch(API_URL + id, {
    method: 'PUT',
    body: JSON.stringify(contactUpd),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => {
      if (!isSuccess(resp)) {
        throw 'Status Code ' + resp.status;
      }
      return resp.json();
    })
    .then((data) => {
      console.log('PUT resp', data);
      contactsList = contactsList.map((contact) =>
        contact.id !== id ? contact : contactUpd
      );
      resetFormData();
    })
    .catch((error) => {
      alert('PUT request error: ' + error);
    })
    .finally(renderList);
}

function removeContact(id) {
  fetch(API_URL + id, {
    method: 'DELETE',
  })
    .then((resp) => {
      if (!isSuccess(resp)) {
        throw 'Status Code ' + resp.status;
      }
      return resp.json();
    })
    .then((data) => {
      console.log('DELETE resp', data);
      contactsList = contactsList.filter((contact) => contact.id !== id);
      resetFormData();
    })
    .catch((error) => {
      alert('DELETE request error: ' + error);
    })
    .finally(renderList);
}
