import { SecurityUpdateGood } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';
import blue from '@mui/material/colors/blue';
import '../Css/Trending.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function CustomPagination({setPage,tot_page}) {
 
    const handleChange=(page)=>{
       setPage(page);
       window.scrollTo(0, 500);
    }

  return (<>
   <div className="pagination">
    <ThemeProvider theme={darkTheme}>
     <Pagination  onChange={(e)=>handleChange(e.target.textContent)} hidePrevButton hideNextButton count={tot_page} color="primary"  />
     </ThemeProvider>
   </div>
</>
  )
}
export default CustomPagination
