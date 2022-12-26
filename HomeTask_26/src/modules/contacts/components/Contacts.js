import '../css/style.css';

import { Outlet, useNavigate } from 'react-router-dom';

import List from './List';
import ListHead from './ListHead';
import useContacts from '../hooks/useContacts';

function Contacts() {
  const navigate = useNavigate();

  const { contactsList, count, setCount, removeContact } = useContacts();

  return (
    <>
      <div>
        <button className="save-btn" onClick={() => navigate('create')}>
          Create Contact
        </button>
      </div>
      <div className="divTable paleBlueRows">
        <ListHead />
        <List
          contacts={contactsList}
          onDelete={removeContact}
          onEdit={navigate}
        />
        <Outlet context={[count, setCount]} />
      </div>
    </>
  );
}

export default Contacts;
