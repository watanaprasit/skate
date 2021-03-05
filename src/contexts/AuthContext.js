import React, {createContext, useContext, useState, useEffect} from 'react';
import { auth } from '../library/firebase'

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children,authenticated,setAuthenticated}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signIn(email, password) {
        setAuthenticated(true)
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        setAuthenticated(false)
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(email) {
        return currentUser.updatePassword(email)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)

        })

        return unsubscribe
    }, [])

    const value ={
        currentUser,
        signUp,
        signIn,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    );
}

