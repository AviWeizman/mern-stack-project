import './App.css';
import login from './components/login';
import mainpage from './components/mainpage';
import {auth} from './components/authenticate';
import {useEffect} from 'react';
import {useState} from 'react';


function App() 
{
  let [auth, setAuth] = useState(false)
  
  let checkAuth = async () =>
  {
     setAuth(await Auth())
  }
  
  useEffect(()=>{
    checkAuth()
  },[])

  return (
    <div>

          {!auth && <>
          <login/>
          </>
          }
          {auth && <>
          <mainPage/>
          </>
          }
      
    </div>
  );
}

export default App;
