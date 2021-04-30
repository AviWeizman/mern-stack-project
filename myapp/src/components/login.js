import {useState} from 'react';
import {gettoken} from './authenticate';

function login(props)
{
   let [loginfaild,setloginfaild] = useState(false)

   let savetostorage = (data) =>
   {
       if(!data.token)
       {
           setloginfaild(true)
       }
       else
       {
           setloginfaild(false)
           window.location.reload()
       }
       sessionStorage['token'] = data.token;
       sessionStorage['name'] = data.name;
   }
   let [cd,setcd] = useState({username : '', password : ''})
}
return(<div>
    <h2>movies subscriptions</h2>
    <table>
        <tbody>
            <tr>
                <td>username:</td>
                <td><input type="text" onChange={u => setcd({...credentials, username: u.target.value})}/></td>
            </tr>
            <tr>
                <td>password:</td>
                <td><input type="password" onChange={p => setcd({...credentials, password: p.target.value})}/></td>
            </tr>
        </tbody>
    </table>
    <Link to='/movies/all'>
                <Button  onClick={async ()=>{saveToStorage(await getToken(cd))}}>Login</Button>
            </Link>
            <p hidden={!loginFailed} style={{color: 'red'}}>Login Failed, Try Again</p>
           
           
         </div>
  );

export default login;



