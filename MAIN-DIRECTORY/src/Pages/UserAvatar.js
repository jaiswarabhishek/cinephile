import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../Context/context';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';



export default function AccountMenu() {

  const {LogOut,currentUser} = useAuth();
  const [error,setError] = React.useState("");
const navigate = useNavigate();

   async function handleLogout(){

     setError("");
    try{
  await LogOut();
  navigate('/sign-in');
    }

    catch(error){
      setError('Failed to logout');
    }
   }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    
        <Tooltip  title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
           
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 45, height: 45, bgcolor:'#1f80e0' }}><AccountCircleIcon /></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
         <Avatar sx={ {bgcolor:'#1f80e0'}} /> {currentUser.email}
        </MenuItem>
       
        <Divider />
        
        <MenuItem>
          <ListItemIcon>
            <Settings sx={ {color:'#1f80e0'}} fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout sx={ {color:'#1f80e0'}} fontSize="small" />
          </ListItemIcon>
         <button style={{border:'none',background:'none',fontSize:'1em',cursor:'pointer'}} onClick={handleLogout}>Logout</button> 
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
