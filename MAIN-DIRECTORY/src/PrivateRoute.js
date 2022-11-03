import React from 'react'
import { useAuth } from './Context/context'
import { Route,Navigate,Routes } from 'react-router-dom'
function PrivateRoute({component: Component,...rest}) {
    const {currentUser} = useAuth();
  return (
 <Routes>
  <Route
    {...rest}
    render={props=>{
        return currentUser ? <Component {...props}/>:<Navigate to='/sign-in' />
    }}
    />
    </Routes>
  
   
  )
}

export default PrivateRoute
