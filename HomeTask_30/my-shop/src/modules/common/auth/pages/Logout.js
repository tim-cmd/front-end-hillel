import { NavLink, Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';
import Typography from '@mui/material/Typography';
import useAuth from '../hooks/useAuth';
import useIsAuthorized from '../hooks/useIsAuthorized';

function Logout() {
  const { logout } = useAuth();
  const isAuthorized = useIsAuthorized();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {!isAuthorized && <Navigate to="/auth/login" />}
        <Typography component="h1" variant="h5">
          You will be logged out
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button component={NavLink} to=".." sx={{ m: 2 }}>
            Back
          </Button>
          <Button
            onClick={logout}
            variant="contained"
            sx={{ m: 2 }}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Logout;
