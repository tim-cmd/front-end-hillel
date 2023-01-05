import { Box, Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import React from 'react';
import useUser from '../hooks/useUser';

function UserForm() {
  const { id } = useParams();
  const { user, errors, isValid, changeUser, saveUser } = useUser(id);

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
      <Box
        onSubmit={onFormSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root, button': {
            m: 1,
            maxWidth: '-webkit-fill-available',
          },
        }}
      >
        <TextField
          name="name"
          label="Name"
          value={user.name}
          onChange={onInputChange}
          fullWidth
          error={errors.name !== ''}
          helperText={errors.name}
        />
        <TextField
          name="surname"
          label="Surname"
          value={user.surname}
          onChange={onInputChange}
          fullWidth
          error={errors.surname !== ''}
          helperText={errors.surname}
        />
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={onInputChange}
          fullWidth
          error={errors.email !== ''}
          helperText={errors.email}
        />
        <Button variant="text" color="error" to=".." component={NavLink}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disabled={!isValid}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
}

export default UserForm;
