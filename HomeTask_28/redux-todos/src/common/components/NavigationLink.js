import { NavLink } from 'react-router-dom';
import React from 'react';

function NavigationLink({ path, label, currentPath, navigate }) {
    // return (
    //     <a
    //         className={
    //             'button' + (currentPath === path ? ' button-primary' : '')
    //         }
    //         href="#"
    //         onClick={() => navigate(path)}
    //     >
    //         {label}
    //     </a>
    // );

    return (
        <NavLink className="button" to={path}>
            {label}
        </NavLink>
    );
}

export default NavigationLink;
