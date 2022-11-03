import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import {auth} from '../Firebase/firebaseSetUp'
 
import { createContext } from 'react';
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AppContext = createContext();

export function useAuth(){
    return useContext(AppContext);
}

const AppProvider =({children})=> {
 
    const [currentUser,setCurrentUser] = useState("");

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    function Login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function LogOut(){
        signOut(auth);
    }
    
     useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth,user=>{
             setCurrentUser(user);
         })
     },[]);

    const value={
        currentUser,
        signUp,
        Login,
        LogOut
    }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}


export {AppContext,AppProvider}
