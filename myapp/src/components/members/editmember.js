import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {getamember,updatemember} from './membersutils.js';

function editmember(props)
{
   const [member,setmember] = useState({name : '', email : '' , city : ''});

   let onload = async () =>
   {
       setmember(await getamember(props.match.params.id))
   }
   useEffect(()=>
   {
       onload()
   },[member._id])

   const update = async () =>
   {
       await updatemember(member)
       props.history.push('/members/all')
   }

   return(<div>
          <h3>Edit Member</h3>
            <TextField label='Member Name' required value={member.name} onChange={m=>setMember({...member, name: m.target.value})}/><br/>
            <TextField label='Email' required value={member.email} onChange={m=>setMember({...member, email: m.target.value})}/><br/>
            <TextField label='City' required value={member.city} onChange={m=>setMember({...member, city: m.target.value})}/><br/>
            
            <Button  onClick={update}>UPDATE</Button>
            <Link to='/members/all'><Button >Cancel</Button></Link>

   </div>)
}

export default editmember;