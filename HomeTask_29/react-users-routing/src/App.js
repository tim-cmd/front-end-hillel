import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Container } from '@mui/material';
import Header from './modules/common/components/Header';
import Home from './modules/home/pages/Home';
import { Provider } from 'react-redux';
import UserForm from './modules/users/pages/UserForm';
import UsersList from './modules/users/pages/UsersList';
import UsersModule from './modules/users/pages/UsersModule';
import store from './modules/users/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
