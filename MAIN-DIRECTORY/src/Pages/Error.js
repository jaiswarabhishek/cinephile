import React from 'react'
import '../Css/error.css';
import { useNavigate} from 'react-router-dom';

 const error_img =
  "https://www.hotstar.com/assets/e888f274671ec4c5a93e1776c3f6137e.png";

function Error() {
  const navigate = useNavigate();

  const setLocation=()=>{
   navigate('/');
  }

  return (
   <div className="error-container">
    <img className='error-img' src={error_img} alt="" />
    <h1 className='err'>404</h1>
    <h3 className='err-msg' >Oops! Page Not Found</h3>
     <button onClick={setLocation}  className='err-btn'>Go Back Home </button>
   </div>
  )
}

export default Error
