import {Link} from 'react-router-dom';
import {deletemember} from './membersutils.js';

function membercard(props)
{
    let ondelete = async () =>
    {
        await deletemember(props.member._id)
        window.location.replace('/members/all')
    }

    return(<div>
        {props.member.name}<br/>

        {props.member.city}<br/>

        {props.member.email}
        <div>
                            <Link to={'/members/edit/'+props.member._id}>
                                <Button >Edit</Button>
                            </Link>
                            <Button  onClick={onDelete}>Delete</Button>
                        </div>

    </div>)

}
