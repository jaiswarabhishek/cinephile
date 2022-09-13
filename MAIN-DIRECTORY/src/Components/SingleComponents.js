import React from 'react'
import '../Css/SingleComponents.css'
import {img_300,unavailable} from './Config';

function SingleComponents({ 
           id,
           poster_path,
           title,
           release_date,
           media_type,
           vote_average,
           vote_count,
           name,
           first_air_date,
           original_name}) {
  return (
    <div className='trending-components-container'>
      <img className='trending-img' src={poster_path?`${img_300}${poster_path}`:unavailable} alt="" />
      <h3 className="trending-title">{title ? title:name}</h3>
      <div className="trending-details">
        <h4 className='release-date' >{release_date?release_date:first_air_date}</h4>
        <h4 className='media-type' >{media_type==="tv"?"TV Series":"Movie"}</h4>
      </div>
    </div>
  )
}

export default SingleComponents
