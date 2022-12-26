import { useEffect, useState } from 'react';

import api from '../services/api';

export default function useContacts() {
  const [contactsList, setContactsList] = useState([]);
  const [count, setCount] = useState(0);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    api.get().then(({ data }) => {
      console.log(data);
      setContactsList(data);
    });
  }, [count]);

  const removeContact = (id) => {
    api.delete(id).then(() => {
      setContactsList(contactsList.filter((item) => item.id !== id));
    });
  };

  const getContactData = (id) => {
    api.get(id).then(({ data }) => {
      console.log('currentContact', data);
      setCurrentContact(data);
    });
  };

  const saveContact = (contact) => {
    console.log('saveContact', contact);
    if (contact.id) {
      return api.put(contact.id, contact);
    } else {
      delete contact.id;
      return api.post('', contact);
    }
  };

  return {
    contactsList,
    count,
    setCount,
    removeContact,
    currentContact,
    getContactData,
    saveContact,
  };
}
