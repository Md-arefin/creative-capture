import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import app from '../Firebase/firebase.config';
import { json } from 'react-router-dom';

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

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        // const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        //     setUser(loggedUser);
        //     setLoading(false);
        // })
        // return () => unsubscribe()

        const unsubscribe = onAuthStateChanged(auth, async (loggedUser) => {
            setUser(loggedUser);

            if(loggedUser?.email){
                https://creative-capture-server.onrender.com/
                fetch('https://creative-capture-server.onrender.com/jwt', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({email: loggedUser?.email})
                })
                .then( res => res.json())
                .then( data => {
                    console.log(data);
                    localStorage.setItem("access-token" , data?.token);
                })
            }
            setLoading(false);

        });
        return () => unsubscribe();

    })

    const authInfo = {
        user,
        loading,
        googleSignIn,
        logOut,
        createUser,
        updateUserProfile,
        signIn,
        setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;