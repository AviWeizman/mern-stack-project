import {useEffect,useState} from 'react';
import {membercard} from './membercard';
import {getall} from './membersutils';
import watched from './memberwatcheddard';
import { Button, Container, Grid, Paper } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"


function Members()
{
    const [members, setMembers] = useState([])
    const [page, setPage] = useState(1)

    async function getMembers()
    {
        setMembers(await getAll())   
    }

    useEffect(()=>{
        getMembers()
    },[])

    let countPerPage = 10
    let pages;
    if(members.length % countPerPage === 0)
    {
        pages = parseInt(members.length/countPerPage)
    }
    else
    {
        pages = parseInt(members.length/countPerPage) + 1
    }

    let membersList = members.slice((page-1)*countPerPage, page*countPerPage).map(d => {
        return(
            <Grid container key={d._id}>
                <Grid item xs={4}>
                    <MemberCard member={d}/>
                </Grid>
                <Grid item xs={8}>
                    <Watched id={d._id} all={true}/>
                </Grid>
            </Grid>
        )
    })
    


    return(
        <div style={{justifyContent: 'flex-start'}}>
            <Container>
                <Pagination count={pages} page={page<pages? page:0} onChange={(e, value) => setPage(value)}/>
                <Button onClick={getMembers}>Refresh</Button>
            </Container>
            
            <Paper className={'Paper'}>
                {membersList}
            </Paper>
        </div>
    )
}

export default Members;
