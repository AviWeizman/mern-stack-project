import axios from 'axios';

export async function auth()
{
    if(sessionStorage['token'])
    {
        let url = 'http://127.0.0.1:2000/users/auth'
        try
        
        {
            await axios.post(url,{token : sessionStorage['token']})
        }
        catch
        {
            return false;
        }
    }
    else
    {
        return false
    }

}

export async function gettoken(cd)
{
    let url = 'http://127.0.0.1:2000/users/login'

    try
    {
        let resp = await axios.post(url,cd)
    }
    catch
    {
        return {token : '' , name : ''}
    }
}