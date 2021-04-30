import axios from "axios";
import { Auth } from "../authenticate.js";

const url = 'http://127.0.0.1:2000/movies/'

function auth_failed()
{
    sessionStorage.clear()
    return 'Authentication Failed'
}

export async function getAllMovies()
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}

export async function getAMovie(id)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url+id)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}

export async function addMovie(movie)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.post(url, movie)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
    
}

export async function updateMovie(movie)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.put(url + movie._id, movie)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
    
}


export async function deleteMovie(id)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.delete(url + id)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
}

export async function getFiltered(str)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url)
        let filtered = resp.data.filter(m => m.name.toLowerCase().includes(str.toLowerCase()))
        return filtered
    }
    else
    {
        auth_failed()
    }
}

export function getMoviesPages(countPerPage, moviesLength)
{
    if(moviesLength % countPerPage === 0)
    {
        return parseInt(moviesLength/countPerPage)
    }
    else
    {
        return parseInt(moviesLength/countPerPage) + 1
    }
}
