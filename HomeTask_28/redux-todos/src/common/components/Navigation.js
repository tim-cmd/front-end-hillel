import './Navigation.css';

import NavigationLink from './NavigationLink';
import React from 'react';

function Navigation({ currentPath, navigate }) {
    return (
        <div className="navigation">
            <NavigationLink
                path="todos"
                label="Todos"
                currentPath={currentPath}
                navigate={navigate}
            />
            <NavigationLink
                path="users"
                label="Users"
                currentPath={currentPath}
                navigate={navigate}
            />
            <NavigationLink
                path="posts"
                label="Posts"
                currentPath={currentPath}
                navigate={navigate}
            />
            <NavigationLink
                path="gallery"
                label="Gallery"
                currentPath={currentPath}
                navigate={navigate}
            />
        </div>
    );
}

export default Navigation;
