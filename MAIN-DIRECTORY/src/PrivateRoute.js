import React from 'react'
import { useAuth } from './Context/context'
import { Route,Navigate,Routes } from 'react-router-dom'
function PrivateRoute({children}) {

    const {currentUser} = useAuth();
    
   if(!currentUser)
   {
       return <Navigate to="/sign-in" />
   }
   else
   {
     return children;
   }
}

export default PrivateRoute
