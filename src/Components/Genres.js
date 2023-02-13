import axios from 'axios'
import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';


function Genres({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
    setName
}) 

{

    const handleAdd=(genre)=>{
        setPage(1);
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=>g.id!=genre.id));
        setName(genre.name);
       
    }
    
    const handleRemove=(genre)=>{
        setSelectedGenres(selectedGenres.filter((g)=>g.id!=genre.id));
        setGenres([...genres,genre]);
        setName("Movies");
        setPage(1);
    }

   

 
    useEffect(()=>{
        const fetchGenres = async()=>{
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

            console.log(data);
            setGenres(data.genres);
        }
     
        fetchGenres();
        return()=>{
            setGenres({});
        }

    },[])

  return (
    <>
        <div className="genres-chips" style={{ marginBottom:'2em'}}>
        {
            selectedGenres && selectedGenres.map((genre)=>{
                return <Chip label={genre.name} key={genre.id} color='success' style={{margin:'0.2em' , marginBottom:'1em'}} clickable  onDelete={()=>handleRemove(genre)}  />
              
            })
        }

    {
        genres && genres.map((genre)=>{
            return <Chip label={genre.name} key={genre.id} style={{margin:'0.2em' , marginBottom:'1em'}} onClick={()=>handleAdd(genre)} clickable color="primary"   />
          
        })
    }
    
    
   </div>
    
    </>
  )
}

export default Genres