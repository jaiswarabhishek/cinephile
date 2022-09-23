import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function Genres() {
  const[page,setPage]= useState(1);

useEffect(()=>{
 const fetchMovies = async()=>{
   
  const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)

  console.log(data);
  
  }

  fetchMovies();
},[])




  return (
    <div>Genres</div>
  )
}

export default Genres