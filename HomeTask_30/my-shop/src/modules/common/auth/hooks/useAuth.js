import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
