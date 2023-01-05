import { useEffect, useState } from 'react';

import api from '../../../api';

const EMPTY_USER = {
  name: '',
  surname: '',
  email: '',
};
export default function useUser(id) {
  const [user, setUser] = useState(EMPTY_USER);
  const [isValid, seIsValid] = useState(false);
  const [errors, setErrors] = useState(EMPTY_USER);

  useEffect(() => {
    if (isNaN(id)) {
      setUser(EMPTY_USER);
    } else {
      api.get('users/' + id).then(({ data }) => setUser(data));
    }
  }, [id]);

  useEffect(() => {
    const nErrors = { ...errors };
    for (const key in user) {
      nErrors[key] = validate(user[key]);
    }
    setErrors(nErrors);
  }, [user]);

  useEffect(() => {
    seIsValid(Object.values(errors).join('').length === 0);
  }, [errors]);

  function validate(value) {
    return value === ''
      ? 'Value is required'
      : value.length > 25
      ? 'Value is too long'
      : '';
  }

  function changeUser(changes) {
    setUser({
      ...user,
      ...changes,
    });
  }

  function saveUser(user) {
    if (user.id) {
      return updateUser(user);
    } else {
      return createUser(user);
    }
  }

  function updateUser(user) {
    return api.put('users/' + user.id, user);
  }

  function createUser(user) {
    return api.post('users', user);
  }

  return {
    user,
    isValid,
    errors,
    changeUser,
    saveUser,
  };
}
