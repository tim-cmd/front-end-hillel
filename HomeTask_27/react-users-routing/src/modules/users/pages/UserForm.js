import { Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React from 'react';
import useUser from '../hooks/useUser';

function UserForm() {
    const { id } = useParams();
    const { user, changeUser, saveUser } = useUser(id);

    const navigate = useNavigate();

    function onInputChange(e) {
        changeUser({ [e.target.name]: e.target.value });
    }

    function onFormSubmit(e) {
        e.preventDefault();

        saveUser(user).then(() => {
            navigate('..');
        });
    }

    return (
        <Paper>
            <form onSubmit={onFormSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={onInputChange}
                    fullWidth
                />
                <TextField
                    name="surname"
                    label="Surname"
                    value={user.surname}
                    onChange={onInputChange}
                    fullWidth
                />
                <TextField
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={onInputChange}
                    fullWidth
                />
                <Button variant="contained" type="submit" color="primary">
                    Save
                </Button>
                <Button
                    variant="text"
                    color="error"
                    to=".."
                    component={NavLink}
                >
                    Cancel
                </Button>
            </form>
        </Paper>
    );
}

export default UserForm;
