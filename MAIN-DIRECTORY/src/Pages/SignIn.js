import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Css/UserAccount.css'
import { useAuth } from '../Context/context';
import {useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function SignIn() {
const {Login} = useAuth();
const [loading ,setLoading] = useState(false);
const [error,setError] = useState("");
const [emailRef,setemailRef] = useState("");
const [passwordRef,setpasswordRef] = useState("");
const navigate = useNavigate();

  async function handleSubmit(e){
  e.preventDefault();
  
  

   try{
    setError("");
    setLoading(true);
    await Login(emailRef,passwordRef);
    navigate('/');
   }
   catch(error){
   
   setError(error.message);
   
   }

   setLoading(false);
   
}

  return (
    <div className="signup-form-container">
      <form className='signup-form' onSubmit={handleSubmit}>
       <h1 style={{color:'#fff',textAlign:'center'}}>Sign In</h1>

        <ThemeProvider theme={darkTheme}>

         
         
          <TextField  required style={{margin:'1em'}} 
          type="email" 
          id="outlined-basic" 
          label="Email"
          onChange={(e)=>setemailRef(e.target.value)}
          variant="outlined" />

  




          { error? <TextField style={{margin:'1em'}}
            required
           error
          id="outlined-password-input"
          label="Password"
          type="password"
          helperText="Incorrect Password"
          onChange={(e)=>setpasswordRef(e.target.value)}
          autoComplete="current-password"
        />
        
        :
        <TextField style={{margin:'1em'}}
            required
            
          id="outlined-password-input"
          label="Password"
          type="password"
         
          onChange={(e)=>setpasswordRef(e.target.value)}
          autoComplete="current-password"
        />

  }


         

         <Link to='/' style={{color:'#1f80e0',marginLeft:'1em',textDecoration:'none'}}>Forgot Password ?</Link>
        </ThemeProvider>

         <Button className='sign-up-btn'  style={{color:'#fff' , margin: '1em',padding: '0.7em'}}   type='submit'>Sign In</Button>
        <h4 style={{color:'#fff',marginLeft:'1em'}}>Need an account ? <Link style={{color:'#1f80e0',textDecoration:'none'}} to='/sign-up'>Sign up</Link> </h4>
      </form>
    </div>
  )
}

export default SignIn