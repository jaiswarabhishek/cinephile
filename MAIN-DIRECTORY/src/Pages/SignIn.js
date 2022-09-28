import React from 'react'
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

function SignIn() {
  return (
    <div className="signup-form-container">
      <form className='signup-form'>
        <h1 style={{color:'#fff',textAlign:'center'}}>Sign In</h1>
        <ThemeProvider theme={darkTheme}>

         
          <TextField  required style={{margin:'1em'}} type="email" id="outlined-basic" label="Email" variant="outlined" />


           <TextField style={{margin:'1em'}}
            required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />


         

         <Link to='/' style={{color:'#1f80e0',marginLeft:'1em',textDecoration:'none'}}>Forgot Password ?</Link>
        </ThemeProvider>

         <button className='sign-up-btn'  type='button'>Sign In</button>
        <h4 style={{color:'#fff',marginLeft:'1em'}}>Need an account ? <Link style={{color:'#1f80e0',textDecoration:'none'}} to='/sign-up'>Sign up</Link> </h4>
      </form>
    </div>
  )
}

export default SignIn