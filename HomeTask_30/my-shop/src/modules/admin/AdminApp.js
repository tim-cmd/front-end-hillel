import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import React from 'react';

function AdminApp() {
    return (
        <ProtectedRoute roles={['admin', 'sales']}>
            <Outlet />
        </ProtectedRoute>
    );
}

export default AdminApp;
