import './App.css';

import { Button, Container, TextField } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Header from './modules/common/components/Header';
import Home from './modules/home/pages/Home';
import UserForm from './modules/users/pages/UserForm';
import UsersList from './modules/users/pages/UsersList';
import UsersModule from './modules/users/pages/UsersModule';

function App() {
    return (
        <Container maxWidth="sm">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/users" element={<UsersModule />}>
                    <Route path="" element={<UsersList />} />
                    <Route path=":id" element={<UserForm />} />
                </Route>
            </Routes>
        </Container>
    );
}

export default App;
