import { Box, Button, Paper, TextField } from '@mui/material';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { changeUser, getOne, saveUser } from '../store/actions/users';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { selectEditingUser } from '../store/selectors/users';
import store from '../store';
import { useEffect } from 'react';

function UserForm() {
  const { id } = useParams();
  
  useEffect(() => {
    if(!isNaN(id)){
      store.dispatch(getOne(id));
    }
  }, [id]);

  
  const user = useSelector(selectEditingUser);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function onInputChange(e) {
    dispatch(changeUser({ [e.target.name]: e.target.value }));
  }

  function onFormSubmit(e) {
    e.preventDefault();

    dispatch(saveUser(user));
    navigate('..');
    e.target.reset();

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
        />
        <TextField
          name="username"
          label="Surname"
          value={user.username}
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
        <Button variant="text" color="error" to=".." component={NavLink}>
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
}

export default UserForm;
