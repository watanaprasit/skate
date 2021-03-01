import React, {createContext, useContext, useState, useEffect} from 'react';
import { auth } from '../library/firebase'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function signUp(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value ={
        currentUser,
        signUp
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}

