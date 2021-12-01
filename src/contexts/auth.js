import { createContext } from 'react';
import * as Auth from '../services/auth';

const AuthContext = createContext({ signed: true, signIn: signIn()});

async function signIn() {
    const response = await Auth.signIn();
    console.log(response);
}

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ signed: true , signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;