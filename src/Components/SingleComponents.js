import React from 'react'
import '../Css/SingleComponents.css'
import {img_300,unavailable} from './Config';
import Badge from '@mui/material/Badge';
import '../Modal/ModalContent'
import ModalContent from '../Modal/ModalContent';

function SingleComponents({ 
           id,
           poster_path,
           title,
           release_date,
           media_type,
           vote_average,
           vote_count,
           name,
           first_air_date
           }) {
  return (
 
    <div className='trending-components-container'>
        <div className="badge">
      <Badge badgeContent={vote_average? vote_average:vote_count} color={vote_average>7 ?"primary" : "secondary"} />
        </div>

      <ModalContent media_type={media_type} id={id}>
      <img className='trending-img'  src={poster_path?`${img_300}${poster_path}`:unavailable} alt="" />
      </ModalContent>
      

      <h3 className="trending-title">{title ? title:name}</h3>
      <div className="trending-details">
        <h4 className='release-date' >{release_date?release_date:first_air_date}</h4>
        <h4 className='media-type' >{media_type==="tv"?"TV Series":"Movie"}</h4>
      </div>
    </div>

  )
}

export default SingleComponents
