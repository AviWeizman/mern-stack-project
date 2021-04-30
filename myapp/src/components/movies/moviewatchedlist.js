import {useEffect,useState} from  'react';
import {Link} from 'react-router-dom';
import {getAMember} from '../members/membersutils';
import {getmembersbymovies} from '../subscriptionsutils';


function MovieWatchedList(props)
{
    const [members, setMembers] = useState([])

    let dateFormat = (date) =>
    {
        let d = new Date(date)
        return d.toDateString()
    }

    useEffect(()=> {
        async function getMembers() {
            let subs = await getMembersByMovie(props.id)
            if(subs.length>0)
            {
                let s = []
                subs.forEach(async sub => {
                    let member = await getAMember(sub.member_id)
                    s.push({...sub, name: member.name})
                    if(s.length===subs.length)
                    {
                        setMembers(s)
                    }
                })
            }
        }
        getMembers()
    }, [])
    let membersWatched = members.filter(m => m.movie_id===props.id).map(member => {
        return <li key={member.member_id}>
            <Link to={'/members/newsub/'+member.member_id}>{member.name}</Link>, {dateFormat(member.date)}
            </li>
    })
    return(
        <div>
            <ul>
                {membersWatched}
            </ul>
        </div>
    )
}


export default MovieWatchedList;
