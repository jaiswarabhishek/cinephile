import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import { img_300,unavailable } from '../Components/Config';
import './Modal.css';
import Carousel from '../Components/Carousel';
import axios from 'axios';

import MovieTrailerModal from './MovieTrailerModal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  display:'flex',
  
  transform: 'translate(-50%, -50%)',
  width: "80%",
  hight:"50%",
  color:'#fff',
  bgcolor: '#141b29',
 
  borderRadius:'0.3em',
  boxShadow: 24,
  p: 4,
};

export default function ModalContent({children,media_type,id}) {
  const [open, setOpen] = useState(false);
  const [content,setContent] = useState();
  const [video,setVideo] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async()=>{
    
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
  
    
    setContent(data);
  }

  const fetchVideo = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

    
   setVideo(data.results[0]?.key);
   
  }
  

  useEffect(()=>{
     fetchData();
     fetchVideo();
  },[])



  return (
    <div>
      <div onClick={handleOpen}  >
      {children}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
      
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {content && <div className='modal-content'>
                 <img src={content.poster_path?`${img_300}/${content.poster_path}`:unavailable} alt="" />
                 </div>
                }  
             
            </Typography>

          { 

          content && <div className="modal-details" >
                 <h1 className='modal-title'>{content.name || content.title}</h1>
                 <div className="modal-items">
                 <span className='modal-tagline' >{content.tagline||content.title||content.name}</span>
                 <span className='modal-bar'>|</span>

                 <span className='modal-date'>{content.first_air_date || content.release_date}</span>
                 </div>
                 <div className="modal-description">
                  <p className='modal-passage'>{content.overview}</p>
                 </div>
       <Carousel media_type={media_type} id={id}/>
       
       
        <MovieTrailerModal video={video} />
       {/* <ReactPlayer  url={`https://www.youtube.com/watch?v=${video}`} /> */}
       

            </div>

          }
  

          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
