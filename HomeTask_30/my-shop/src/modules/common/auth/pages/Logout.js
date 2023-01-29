import { Navigate } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

function Logout() {
    const { logout } = useAuth();
    const isAuthorized = useIsAuthorized();

    return (
        <div>
            {!isAuthorized && <Navigate to="/auth/login" />}
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Logout;
