/* eslint-disable react/prop-types */
import { createContext } from "react";
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth"
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

   // observeing the user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    } , [])
    
    
    const authenticationInfo = {
        user,
        loading,
        logInWithGoogle,
    }
    return (
        <FirebaseAuthContext.Provider value={authenticationInfo}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export default FirebaseAuthProvider;