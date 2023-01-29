import { NavLink } from 'react-router-dom';
import React from 'react';
import useIsAuthorized from '../../../common/auth/hooks/useIsAuthorized';
import useUser from '../../../common/auth/hooks/useUser';

function Landing() {
    const user = useUser();
    const isAuthorized = useIsAuthorized();

    return (
        <ul>
            <li>{isAuthorized && user.name}</li>
            <li>
                <NavLink to="/admin">Admin Panel</NavLink>
            </li>
            <li>
                <NavLink to="/admin/users">Users Management</NavLink>
            </li>
            {isAuthorized ? (
                <li>
                    <NavLink to="/auth/logout">Logout</NavLink>
                </li>
            ) : (
                <li>
                    <NavLink to="/auth/login">Login</NavLink>
                </li>
            )}
        </ul>
    );
}

export default Landing;
