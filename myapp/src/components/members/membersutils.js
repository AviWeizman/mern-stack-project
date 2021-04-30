import axios from "axios";
import { Auth } from "../../authenticate.js";

const url = 'http://127.0.0.1:2000/members/'

function auth_failed()
{
    sessionStorage.clear()
    return 'Authentication Failed'
}

export async function getAll()
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}

export async function getAMember(id)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.get(url+id)
        return resp.data
    }
    else
    {
        auth_failed()
    }
}

export async function addMember(member)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.post(url, member)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
    
}

export async function updateMember(member)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.put(url + member._id, member)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
    
}


export async function deleteMember(id)
{
    let auth = await Auth()
    if(auth)
    {
        let resp = await axios.delete(url + id)
        console.log(resp.data);
    }
    else
    {
        auth_failed()
    }
}
