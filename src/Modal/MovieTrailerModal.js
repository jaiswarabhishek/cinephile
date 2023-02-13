import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactPlayer from 'react-player';
import YouTubeIcon from '@mui/icons-material/YouTube';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
   width: "50%",
  
  bgcolor: '#141b29',
 borderRadius:'0.3em',
  boxShadow: 24,
  p: 4,
};

export default function MovieTrailerModal({video}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button startIcon={<YouTubeIcon/>} onClick={handleOpen} style={{width:'100%'}} variant="contained">Watch Trailer</Button>
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
             <ReactPlayer  width='100%' controls  playing='true' url={`https://www.youtube.com/watch?v=${video}`} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
