import React, { createContext, useState } from 'react'
import * as auth from '../services/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    login(): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const[user, setUser] = useState<object | null>(null)

    async function login() {
        const response = await auth.login();
        console.log(response)

        const {token,user} = response

        setUser(response.user);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
