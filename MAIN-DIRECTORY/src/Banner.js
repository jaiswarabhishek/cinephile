import React from 'react'
import './Banner.css'
import axios from './Components/axios';
import { useState,useEffect } from 'react';
import requests from './Components/request';
const baseurl ="https://image.tmdb.org/t/p/original/"

function Banner() {
    const [movie,setMovie] = useState([]);
    // const number=Math.random() * 100;
    // const pagenumber=`&page=${number}`;
    useEffect(()=>{
        async function fetchMovie(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() *request.data.results.length )]);
            return request;
        }
        fetchMovie();
    },[])



  return (
    <div className="banner-container">
        <div className="banner-wrapper">
            <div className="banner-wrapper-2">
              <img src={`${baseurl}${movie?.backdrop_path}`} className='banner-img' alt="" />
            </div>
           
            <div className="banner-wrapper-1">
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <p className='release_date'> {movie?.media_type==="tv"?"TV Series":"Movie"} | {movie?.release_date || movie?.first_air_date}</p>
                <h4 className='banner-discription'>  {movie?.overview}</h4>
            </div>
        </div>
    </div>
  )
}

export default Banner