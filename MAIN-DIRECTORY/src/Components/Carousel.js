import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { noPicture } from './Config';
import { img_300 } from './Config';
import '../Css/Carousel.css'

const Carousel = ({media_type,id}) => {
  const handleOnDragStart = e => e.preventDefault();

  const [credits,setCredits] = useState();

  const fetchCredits = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setCredits(data.cast);
  }

  useEffect(()=>{
    fetchCredits();
  },[]);

const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
   <div style={{padding:'1em'}} key={id}>
    <AliceCarousel autoPlay infinite disableButtonsControls disableDotsControls mouseTracking responsive={responsive} >

      {  credits && credits.map((c)=>{
        
       return<> 
       <div className="cast-content" >
        <img  src={c.profile_path?`${img_300}/${c.profile_path}`:noPicture} 
      onDragStart={handleOnDragStart} 
      style={{margin:'0 auto',borderRadius:'0.2em'}}
       className="yours-custom-class" />
       <p style={{fontSize:'0.5em',textAlign:'center',width:'auto' }}>{c?.name}</p>
       </div>
      
       </>
      })
}

    </AliceCarousel>
   
    </div>
  )
}

export default Carousel;
