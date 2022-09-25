import React from 'react'
import '../Css/Header.css'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Search from '@mui/icons-material/Search';
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';


function Header() {
const navigate = useNavigate();


const setLocation =()=>{
  navigate('/');
}


  return (
    <>
  <div className="header-container">
  <div className="header">
  <h1  className='title' onClick={setLocation}  >CINEPHILE</h1>
  
 <BottomNavigationAction href='/' showLabel   style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
 <BottomNavigationAction href='/movies' showLabel style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
 <BottomNavigationAction href='/series' showLabel style={{color:"white"}} label="TV Series" icon={<LiveTvIcon />} />
 <BottomNavigationAction href='/search' showLabel style={{color:"white"}} label="Search" icon={<Search />} />

    </div>
   <button className='create-account-btn' >Sign in</button>
    </div>
    </>
  
  )
}

export default Header
