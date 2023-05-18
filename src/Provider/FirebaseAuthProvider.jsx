/* eslint-disable react/prop-types */
import { createContext } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from "firebase/auth"
import {useState,useEffect} from "react"
import app from "../Firebase/Firebase.config";


export const FirebaseAuthContext = createContext()
const auth = getAuth(app) 
const FirebaseAuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

   
    //login user by google accout
    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    
    const createUserFirebase = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

   //updating a user profile
    const updateProfileFirbase = (name,photoUrl) => {
        return updateProfile(auth.currentUser , {displayName:name,photoURL:photoUrl})
    }
   // observeing the user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unsubscribe()
        }
    } , [])
    
    
    const authenticationInfo = {
        user,
        loading,
        logInWithGoogle,
        createUserFirebase,
        updateProfileFirbase
    }
    return (
        <FirebaseAuthContext.Provider value={authenticationInfo}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export default FirebaseAuthProvider;