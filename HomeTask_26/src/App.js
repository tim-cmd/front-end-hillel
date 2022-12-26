import { Navigate, Route, Routes } from 'react-router-dom';

import Contacts from './modules/contacts/components/Contacts';
import EditForm from './modules/contacts/components/EditForm';
import Form from './modules/contacts/components/Form';

function App() {
  return (
    <>
      <Routes>
        <Route path="contacts" element={<Contacts />}>
          <Route path=":contactId" element={<EditForm />} />
          <Route path="create" element={<Form />} />
        </Route>
        <Route path="/" element={<Navigate to="contacts" />} />
      </Routes>
    </>
  );
}

export default App;
