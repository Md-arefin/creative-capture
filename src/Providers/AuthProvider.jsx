import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);


const auth = getAuth(app);
const Provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, Provider);
    }

    const updateProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })

        return () => unsubscribe();
    })

    const authInfo = {
        user,
        loading,
        googleSignIn,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;