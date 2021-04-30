import { Button, Grid, Paper, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { HashLink as Link } from "react-router-hash-link"
import { getAMovie } from "../movies/moviesUtils"
import { getMoviesByMember } from "../subscriptionsUtils"


function Watched(props)
{
    const [watched, setWatched] = useState([])
    const [watchedList, setWatchedList] = useState([])
    
    let dateFormat = (date) =>
    {
        let d = new Date(date)
        return d.toDateString()
    }

    let getMoviePage = (id) =>
    {
        let movies = JSON.parse(sessionStorage['AllMovies'])
        let index = movies.findIndex(x=>x._id===id)
        let countPerPage = parseInt(sessionStorage['countPerPage'])
        let page = parseInt(index/countPerPage)+1
        return page
    }
    
    useEffect(()=> {
        async function getSubs() {
            let subs = await getMoviesByMember(props.id)
            if(subs.length>0)
            {
                let s = []
                subs.forEach(async sub => {
                    let movie = await getAMovie(sub.movie_id)
                    s.push({...sub, name: movie.name})
                    if(s.length===subs.length)
                    {
                        setWatched(s)
                    }
                })
            }
        }
        getSubs()
    }, [])


    useEffect(() => {
        let w = watched.map(s=>{
            return <li key={s._id}>
                    <Link to={`/movies/all/${getMoviePage(s.movie_id)}/#${s.movie_id}`}>{s.name}</Link>, {dateFormat(s.date)}
                </li>
        })
        setWatchedList(w)

    }, [watched])
    
    
    return(<div>
        watched:
        <ul>
            {watchedList}
        </ul>
        <div hidden={!props.all}>
                    <Link to={'/members/newsub/'+props.id}>
                        <Button >Add new watched</Button>
                    </Link>
                </div>

    </div>)

    }


        



export default Watched
