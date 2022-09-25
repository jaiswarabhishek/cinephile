const useGenre=(selectedGenres)=>{
    if(selectedGenres<1)
    return " ";

    const GenreCodes = selectedGenres.map((g)=>g.id);

    return GenreCodes.reduce((acc,curr) => acc+","+curr);

}

export default useGenre;