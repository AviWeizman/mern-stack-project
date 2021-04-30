import {useState} from 'react';
import {Link} from 'react-router-dom';
import {addmember} from '../members/membersutils.js';


function Addmember(props)
{
    const [member,setmember] = useState({name : '', email : '', city : ''})

    const add = async () =>
    {
        await addmember(member)
        props.history.push('/members/all')
    }
}

return(<div>
      <h3>Add A Member</h3>
            <TextField label='Name' required onChange={m=>setMember({...member, name: m.target.value})}/><br/>
            <TextField label='Email' required onChange={m=>setMember({...member, email: m.target.value})}/><br/>
            <TextField label='City' required onChange={m=>setMember({...member, city: m.target.value})}/><br/>
            <Button onClick={add}>ADD</Button>
            <Link to='/members/all'><Button >Cancel</Button></Link>
        
    )

</div>)

export default Addmember;
