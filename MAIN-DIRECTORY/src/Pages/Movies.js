import React, { useState } from 'react'
import axios from 'axios'
import'../Css/Movies.css'
import SingleComponents from '../Components/SingleComponents'
import Genres from '../Components/Genres'
import CustomPagination from './Pagination'
import useGenre from '../Hooks/useGenre'
import { useEffect } from 'react'

function Movies() {
  const[page,setPage]= useState(1);
  const[name,setName]=useState("Movies");
  const [tot_page,setTotalPage]=useState(1);
  const [trending,setTrending] = useState();
  const [genres,setGenres] = useState([]);
  const [selectedGenres,setSelectedGenres] = useState([]);
  const genresString = useGenre(selectedGenres);
  
  useEffect(()=>{

 const fetchMovies = async()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genresString}`)
  
  setTrending(data.results);
  setTotalPage(data.total_pages);
  console.log(data);

  }

  fetchMovies();
  // eslint-disable-next-line
},[page,genresString])

  return (<>
    <div className="geners-container">
     <h2 className="geners-title" style={{marginBottom:'1em'}}>Genres</h2>
     <Genres type="movie" selectedGenres={selectedGenres} setPage={setPage} setName={setName} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres}/>
         <h2 className="geners-title" style={{marginBottom:'1em'}}>{name}</h2>
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
    </>
  )
}

export default Movies