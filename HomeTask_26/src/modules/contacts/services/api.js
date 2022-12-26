import { CONTACTS_API_URL } from '../../../config';
import axios from 'axios';
export default axios.create({
  baseURL: CONTACTS_API_URL,
});
