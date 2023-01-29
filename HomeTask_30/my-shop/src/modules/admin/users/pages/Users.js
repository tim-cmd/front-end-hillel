import ProtectedRoute from '../../../common/auth/components/ProtectedRoute';
import React from 'react';

function Users() {
    return <ProtectedRoute roles={['admin']}>Users</ProtectedRoute>;
}

export default Users;
