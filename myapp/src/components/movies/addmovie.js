import {Button,Paper,TextField} from '@material-ui/core';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {addmovie} from './moviesutils.js';

function AddMovie()
{
    const [movie, setMovie] = useState({name: '', premiered: '', genres: [], image: {original: ''}})

    const add = async () =>
    {
        await addMovie(movie)
        
    }

    return(
        <Paper >
            <h3>Add A Movie</h3>
            <TextField label='Movie Name' required onChange={m=>setMovie({...movie, name: m.target.value})}/><br/>
            <TextField label='Year Permiered' required onChange={m=>setMovie({...movie, premiered: m.target.value})}/><br/>
            <TextField label='Genres' required onChange={m=>setMovie({...movie, genres: m.target.value.split(', ')})}/><br/>
            <TextField label='Image URL' required onChange={m=>setMovie({...movie, image: {original: m.target.value}})}/><br/>
            <Link to='/movies/all'><Button  onClick={add}>ADD</Button></Link>
            <Link to='/movies/all'><Button >Cancel</Button></Link>
        </Paper>
    )
}

export default AddMovie;
