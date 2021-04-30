import { Button, Container, TextField } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import moviecard from './moviecard.js';
import {getallmovies,getfilterd,getmoviespage} from './moviesutils.js'


function Movies(props)
{
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState('')
    const [countPerPage, setCountPerPage] = useState(10)

    async function getMovies()
    {
        if(filter)
        {
            setMovies(await getFiltered(filter))
        }
        else
        {
            let m = await getAllMovies()
            setMovies(m)
            sessionStorage['AllMovies'] = JSON.stringify(m)
            sessionStorage['countPerPage'] = countPerPage
        }
    }
    useEffect(() => {
        if(props.match.params.page)
        {
            setPage(parseInt(props.match.params.page))
        }
        else
        {
            setPage(1)
        }
    },  [])

    
    useEffect(()=>{
        getMovies()
    },[filter])
    

    
    let pages = getMoviesPages(countPerPage, movies.length)

    let moviesList = movies.slice((page-1)*countPerPage, page*countPerPage).map(d => {
        return(
            <MovieCard key={d._id} movie={d}/>
        )
    })
    


    return(
        <div style={{justifyContent: 'flex-start'}}>
            <Container >
                <TextField label='Search' onChange={e => setFilter(e.target.value)}/>
                <Pagination count={pages} page={page<pages? page:1} onChange={(e, value) => setPage(value)}/>
            </Container>
            <Button onClick={getMovies}>Refresh</Button>Page {page}

            <React.Fragment>
                {moviesList}
            </React.Fragment>     
            <Pagination count={pages} page={page<pages? page:1} onChange={(e, value) => setPage(value)}/>Page {page}       
        </div>
    )
}



export default Movies;
