import React, { useRef } from 'react'
import { useState } from 'react'
import Header from '../Components/Header';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Css/UserAccount.css'
import { Button } from '@mui/material';
import { useAuth } from '../Context/context';
import {useNavigate} from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function SignUp() {

  const [nameRef,setnameRef] = useState("");
  const [passwordRef,setpasswordRef] = useState("");
  const [confirmPasswordRef,setconfirmPasswordRef] =useState("");
  const [emailRef,setemailRef] = useState("");
  const {signUp,currentUser} = useAuth();
  const [error,setError] = useState("");
  const [loading ,setLoading] = useState(false);
  const navigate = useNavigate();

  
  async function handleSubmit(e){
  e.preventDefault();
  
  
  if(passwordRef!== confirmPasswordRef){
   return setError("Passwor do not match");
  }


   try{
    setError("");
    setLoading(true);
    await signUp(emailRef,passwordRef);
    navigate('/');
   }
   catch(error){
   alert(error.message);
   }

   setLoading(false);
   
}



  return (
    <div className="signup-form-container">
      <form className='signup-form'  onSubmit={handleSubmit} >
        
        <h1 style={{color:'#fff',textAlign:'center'}}>Sign Up</h1>
       
        <ThemeProvider theme={darkTheme}>

          <TextField  required style={{margin:'1em'}}
           type="text"
           id="outlined-basic"
           name='name' 
            
           onChange={(e)=>setnameRef(e.target.value)} 
           label="Name" 
           variant="outlined" />


          <TextField  required style={{margin:'1em'}} 
          type="email" 
          id="outlined-basic" 
          name='email' 
          onChange={(e)=>setemailRef(e.target.value)} 
          label="Email" 
          variant="outlined" />


        <TextField style={{margin:'1em'}}
          required
          inputProps={{ maxLength: 8 }}
          id="outlined-password-input"
          onChange={(e)=>setpasswordRef(e.target.value)}
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
        />

{
  error ? <TextField style={{margin:'1em'}}
          required
          error
          onChange={(e)=>setconfirmPasswordRef(e.target.value)}
          id="outlined-password-input"
          label="Confirm Password"
          name='confirmPassword'
          type="password"
          inputProps={{ maxLength: 8 }}
          helperText="Incorrect Password"
          autoComplete="current-password"
        />
        :
        <TextField style={{margin:'1em'}}
          required
          onChange={(e)=>setconfirmPasswordRef(e.target.value)}
          id="outlined-password-input"
          label="Confirm Password"
          name='confirmPassword'
          type="password"
         inputProps={{ maxLength: 8 }}
          autoComplete="current-password"
        />

}

        </ThemeProvider>

         <Button disabled={loading} 
         style={{color:'#fff' , margin: '1em',padding: '0.7em'}}  
         className='sign-up-btn' 
         type='submit'>
          Sign Up
         </Button>

        <h4 style={{color:'#fff',marginLeft:'1em'}}>
        Already have an account ?  
         <Link style={{color:'#1f80e0',textDecoration:'none'}} to='/sign-in'>Log In</Link>
        </h4>

      </form>
    </div>
  )
}

export default SignUp
