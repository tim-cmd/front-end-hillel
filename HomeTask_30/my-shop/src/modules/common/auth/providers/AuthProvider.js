import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const value = {
        user,
        login: (username, password, role) => {
            setUser({
                username,
                name: 'Alex',
                role,
            });
        },
        logout: () => setUser(null),
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;
