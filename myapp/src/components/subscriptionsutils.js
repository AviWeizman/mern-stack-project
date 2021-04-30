import axios from 'axios';
import {auth, auth, auth} from './authenticate';

const url = 'http://127.0.0.1:2000/subscriptions/';

function auth_failed()
{
    sessionStorage.clear();
    window.location.assign('/');
}

export async function getallsubs()
{
    let auth = await auth()
    if(auth)
    {
        let resp = await axios.get(url)
        return resp.data
    }
    else
    {
        auth_failed
    }
}

export async function addnewsubscription(sub)
{
  let auth = await auth()
  if(auth)
  {
      let resp = await axios.post(url,sub)
  }
  else
  {
      auth_failed
  }
}
export async function getmembersbymovies(movie_id)
{
    let auth = await auth()
    if(auth)
    {
        let resp = await axios.get(url + 'movies/' +movie_id)
        return resp.data
    }
    else
    {
        auth_failed();
    }
}




