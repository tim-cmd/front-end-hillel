import { AppBar, Button, Toolbar, Typography } from '@mui/material';

import { NavLink } from 'react-router-dom';
import React from 'react';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" flexGrow={1}>
                    Super App
                </Typography>

                <Button to="/" color="inherit" component={NavLink}>
                    Home
                </Button>
                <Button to="/users" color="inherit" component={NavLink}>
                    Users
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
