import { useNavigate, useOutletContext } from 'react-router-dom';

import useContacts from '../hooks/useContacts';

export default function useForm() {
  const navigate = useNavigate();
  const [count, setCount] = useOutletContext();
  const { saveContact } = useContacts();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target.elements;

    saveContact({
      id: form.id.value,
      name: form.name.value,
      surname: form.surname.value,
      email: form.email.value,
    }).then(({ data }) => {
      console.log('saved!', data);
      setCount(count + 1);
      navigate('/contacts');
    });
  };

  return [onFormSubmit];
}
