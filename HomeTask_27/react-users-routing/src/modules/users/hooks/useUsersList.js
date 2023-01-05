import { useEffect, useState } from 'react';

import api from '../../../api';

export default function useUsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        return api.get('users').then(({ data }) => setUsers(data));
    }

    function deleteUser(id) {
        return api.delete('users/' + id).then(fetchUsers);
    }

    return {
        users,
        fetchUsers,
        deleteUser,
    };
}
