import { useEffect, useState } from "react";
import MemberCard from "./memberCard";
import NewSubCard from "./memberNewSubCard";
import { getAMember } from "./membersUtils";
import Watched from "./memberWatchedCard";
import {Grid} from '@material-ui/core';



function NewSub(props)
{
    const [member, setMember] = useState({})
    
    useEffect(() => {
        async function getMember() 
        {
            let m = await getAMember(props.match.params.id)
            setMember(m)
        }
        getMember()
    }, [])

    return(
        <Grid container>
            <Grid item xs={4}>
                <MemberCard member={member}/>
            </Grid>
            <Grid item xs={8}>
                <Watched id={props.match.params.id} all={false}/>
            </Grid>
            <Grid item xs={12}>
                <NewSubCard id={props.match.params.id}/>
            </Grid>
        </Grid>
    )
}

export default NewSub;
