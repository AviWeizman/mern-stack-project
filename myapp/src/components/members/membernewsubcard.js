import {addnewsubscription,getmoviesbymember} from '../subscriptionsutils';
import {useEffect,useState} from 'react';
import {getallmovies} from '../movies/moviestils';
import {Link} from 'react-router-dom';


function newsubcard(props)
{
    const [movies,setmovies] = useState([]);
    const [newsub,setnewsub] = useState([]);
    const [watched,setwatched] = useState([]);

    useEffect(()=>
    {
        async function getmovies()
        {
            let m = await getallmovies()
            setmovies([...m])
        }
        async function getsubs()
        {
            let subs = await getmoviesbymember(props.id)
            if(subs.length>0)
            {
                let s  = []
                subs.forEach(async sub => {
                    s.push(sub.movie_id)
                    if(s.length===subs.length)
                    {
                        setwatched(s)
                    }
                    
                });
            }
        }
        getsubs();
        getmovies();
        setnewsub({...newsub,member_id: props.id})

    },[]);

    let addmovie = (id) =>
    {
        setnewsub({...newsub, movie_id: id})
    }

    let adddate = (date) =>
    {
        setnewsub({...newsub,date : date})
    }

    let moviesList = movies.filter(f=> !watched.includes(f._id)).map(m => {
        return <MenuItem key={m._id} value={m._id}>{m.name}</MenuItem>

   
})
return(
    <Paper >
        <InputLabel>Select a new watched</InputLabel>
        <Select onChange={e=>{
            addMovie(e.target.value)
            }}>
            {moviesList}
        </Select>
        <br/><br/>
        <input type='date' onChange={e => addDate(e.target.value)}/>
        <Link to='/members/all'>
            <Button  onClick={() => AddNewSubscription(newSub)}>add new watched</Button>
        </Link>
        <br/>
    </Paper>
)
}

export default NewSubCard


