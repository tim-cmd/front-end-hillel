import { Navigate, Route, Routes } from 'react-router-dom';

import AdminApp from './modules/admin/AdminApp';
import Dashboard from './modules/admin/dashboard/pages/Dashboard';
import Landing from './modules/user/landing/pages/Landing';
import Login from './modules/common/auth/pages/Login';
import Logout from './modules/common/auth/pages/Logout';
import React from 'react';
import Signup from './modules/common/auth/pages/Signup';
import Users from './modules/admin/users/pages/Users';

function App() {
    return (
        <Routes>
            <Route path="" element={<Landing />} />

            <Route path="auth">
                <Route
                    path=""
                    element={<Navigate replace={true} to="login" />}
                />
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="signup" element={<Signup />} />
            </Route>

            <Route path="admin" element={<AdminApp />}>
                <Route
                    path=""
                    element={<Navigate replace={true} to="dashboard" />}
                />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Routes>
    );
}

export default App;
