import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CustomPagination from './Pagination';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SingleComponents from '../Components/SingleComponents';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../Css/Trending.css'
import axios from 'axios';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function Search() {
 const [value, setValue] = useState(0);
 const [content,setContent] =useState([]);
 const [page,setPage]=useState(1);
 const [tot_page,setTotalPage] = useState();
 const [searchText,setsearchText] =useState("");
 const [name,setName] = useState("Movies");


 
  const fetchContent = async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${value ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&language=en-US&page=${page}&include_adult=false`);
    setContent(data.results);
    setTotalPage(data.total_pages);
  }

  useEffect(()=>{
    window.scroll(0,0);
    fetchContent();
    if(searchText===""){
    setContent([]);
    setTotalPage(1);
    }

  },[value,page,searchText]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };


  return (
    <div >
    <ThemeProvider theme={darkTheme}>
    <div style={{ display:'flex' ,justifyContent:'center',marginTop:'2em'  }}>
      <TextField className="inputRounded"  type="search" style={{width:'40%',borderRadius:'20em'}}  onChange={(e) => setsearchText(e.target.value)} id="outlined-basic" label={`Search Your Favorite ${value==0?"Movies":"TV Series" }`} variant="outlined" />
       <Button id="outlined-basic"  variant="contained" style={{marginLeft:'0.3em'}} onClick={fetchContent}  >
      <SearchIcon />
      </Button>
      </div>
      <div style={{display:'flex' ,justifyContent:'center' ,alignItems:'space-between',marginBottom:'3em'}}>
      <Tabs value={value} onChange={handleChange} style={{width:'45%',marginTop:'0.5em'}}  >
      <Tab label="Movies" style={{width:'45%'}}  />
      <Tab  label="TV Series" style={{width:'45%'}} />
    </Tabs>
    </div>
    </ThemeProvider>
     <div className="inner-trending-container">
      {
        content && content.map((trends)=>{
          const {id,poster_path,title,release_date,media_type,vote_average,vote_count,name,first_air_date,original_name} =trends;
          return <SingleComponents
           key={id}
           id={id}
           poster_path={poster_path} 
           title={title} 
           release_date={release_date} 
           media_type={value?"tv":"movie"}
           vote_average={vote_average}
           vote_count={vote_count}
           name={name}
           first_air_date={first_air_date}
           original_name={original_name}
            />
        })
      }
      {searchText &&
          !content &&
          (value ? <h2 >No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      { tot_page>1 &&
      <CustomPagination setPage={setPage} tot_page={tot_page} />
      }
    </div>
  )
}

export default Search