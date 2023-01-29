import { Navigate } from 'react-router-dom';
import React from 'react';
import useIsAuthorized from '../hooks/useIsAuthorized';

function ProtectedRoute({ children, roles }) {
    const isAuthorized = useIsAuthorized(roles);

    return isAuthorized ? children : <Navigate to="/auth/login" />;
}

export default ProtectedRoute;
