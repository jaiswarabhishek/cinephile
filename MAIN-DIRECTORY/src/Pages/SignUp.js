import React, { useRef } from 'react'
import { useState } from 'react'
import Header from '../Components/Header';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Css/UserAccount.css'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function SignUp() {
  const nameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef =useRef();
  const emailRef = useRef();


   
  return (
    <div className="signup-form-container">
      <form className='signup-form'>
        <h1 style={{color:'#fff',textAlign:'center'}}>Sign Up</h1>
        <ThemeProvider theme={darkTheme}>

          <TextField  required style={{margin:'1em'}} type="text" id="outlined-basic" name='name' ref={nameRef} label="Name" variant="outlined"  />

          <TextField  required style={{margin:'1em'}} type="email" id="outlined-basic" name='email' ref={emailRef} label="Email" variant="outlined" />


           <TextField style={{margin:'1em'}}
            required
          id="outlined-password-input"
          ref={passwordRef}
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
        />


         <TextField style={{margin:'1em'}}
          required
          ref={confirmPasswordRef}
          id="outlined-password-input"
          label="Confirm Password"
          name='confirmPassword'
          type="password"
          autoComplete="current-password"
        />

        </ThemeProvider>

         <button className='sign-up-btn'  type='submit'>Sign Up</button>
        <h4 style={{color:'#fff',marginLeft:'1em'}}>Already have an account ? <Link style={{color:'#1f80e0',textDecoration:'none'}} to='/sign-in'>Log In</Link> </h4>
      </form>
    </div>
  )
}

export default SignUp
