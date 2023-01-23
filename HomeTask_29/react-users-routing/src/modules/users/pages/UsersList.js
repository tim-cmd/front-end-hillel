import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteUser, getList } from '../store/actions/users';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { selectUsers } from '../store/selectors/users';
import store from '../store';

// import useUsersList from '../hooks/useUsersList';


store.dispatch(getList());

function UsersList() {
    // const { users, deleteUser } = useUsersList();
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outlined"
                                    onClick={() => {
                                        navigate('./' + user.id);
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => dispatch(deleteUser(user.id))}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersList;
