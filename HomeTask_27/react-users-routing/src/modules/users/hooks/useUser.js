import { useEffect, useState } from 'react';

import api from '../../../api';
import { createHashRouter } from 'react-router-dom';

const EMPTY_USER = {
    name: '',
    surname: '',
    email: '',
};
export default function useUser(id) {
    const [user, setUser] = useState(EMPTY_USER);

    useEffect(() => {
        if (isNaN(id)) {
            setUser(EMPTY_USER);
        } else {
            api.get('users/' + id).then(({ data }) => setUser(data));
        }
    }, [id]);

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
        changeUser,
        saveUser,
    };
}
