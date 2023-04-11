import React from 'react'
import axios from '../Components/axios'
import { useState,useEffect } from 'react';
import '../Css/Trending.css'
import requests from '../Components/request';
import CustomPagination from './Pagination';
import Banner from '../Banner';
import SingleComponents from '../Components/SingleComponents';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Trending() {
  const [page,setPage] = useState(1);
   const [loading, setLoading] = useState(false);
  const [tot_page,setTotalPage] = useState(100);
  const [trending,setTrending] = useState([]);
  const str =`&page=${page}`;

  useEffect(()=>{
    async function fetchTrending(){
      setLoading(true);
      const request = await axios.get(requests.fetchTrending+str);
      setTrending(request.data.results);
      setTotalPage(request.data.total_pages);
      setLoading(false);
      return request;
    }
    fetchTrending();
  },[page])








  return (<>
  {
    loading && 
      <Box sx={{ display: 'flex' , justifyContent:'center',marginTop:'2em' }}>
      <CircularProgress />
    </Box>
  }

 {!loading && <div>
    <Banner />
   

    <div className="trending-container">
      <h3 className='trending-today'>Latest & Trending</h3>
     <div className="inner-trending-container">
      {
        trending && trending.map((trends)=>{
          const {id,poster_path,title,release_date,media_type,vote_average,vote_count,name,first_air_date,original_name} =trends;
          return <SingleComponents
           key={id}
           id={id}
           poster_path={poster_path} 
           title={title} 
           release_date={release_date} 
           media_type={media_type}
           vote_average={vote_average}
           vote_count={vote_count}
           name={name}
           first_air_date={first_air_date}
           original_name={original_name}
            />
        })
      }
      </div>
      <CustomPagination setPage={setPage} tot_page={tot_page} />
    </div>
    </div>
}
    </>
  )
}

export default Trending
