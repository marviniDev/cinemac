import React, { createContext, useState, useEffect } from 'react'
// import * as Auth from '../services/auth'

const AuthContext = createContext({signed: false})

export const AuthProvider = ({ children }) => {
    const [signed, setSigned] = useState(null)
    const [user, setUser] = useState({
        name: '',
        email: ''
    })
    
    useEffect(() => {
        const userStorage = localStorage.getItem('@app::user')
        console.log(userStorage, "oi")
        userStorage ? setUser(JSON.parse(userStorage)) && setSigned(true) : setUser({ name: 'Marcos', email:'vinicius.uchoa2002@gmail.com' })
    }, [])


    function ExitToApp() {
        localStorage.removeItem('@app::user')
        return "/login"
    }

    return (
        <AuthContext.Provider value={{ signed, setSigned, user, setUser, ExitToApp }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext