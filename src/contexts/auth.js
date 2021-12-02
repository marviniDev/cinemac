import React, { createContext, useState, useEffect } from 'react';
// import * as Auth from '../services/auth';

const AuthContext = createContext({signed: false});

export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(null)
    const [user, setUser] = useState({
        name: '',
    })
    
    useEffect(() => {
        const userStorage = localStorage.getItem('@app::user')
        console.log(userStorage, "oi");
        userStorage ? setUser(JSON.parse(userStorage)) && setSigned(true) : setUser({ name: '' })
    }, [])

    console.log(signed);


    // async function SignIn() {
    //     const response = await Auth.signIn();
    //         console.log(response);
    // }

    return (
        <AuthContext.Provider value={{ signed, setSigned, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;