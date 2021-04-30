import {Breadcumbs,Grid} from '@material-ui/core';
import {Link,Route,Switch} from 'react-router-dom';
import addmember from './addmember.js';
import editmember from './editmember.js';
import newsub from './membernewsubpage.js';
import member from './membersall';

function MembersPage()
{
    return(
        <div style={{alignContent: 'center', display: 'flex'}}>
            <Grid container direction='column' spacing={2}>
            <Grid item>
                <Breadcrumbs>
                    <Link to='/members/all'>All Members</Link>
                    <Link to='/members/add'>Add A Member</Link>
                </Breadcrumbs>
            </Grid>
            <Grid item>
                <Switch>
                    <Route path='/members/all' component={Members}/>
                    <Route path='/members/add' component={AddMember}/>
                    <Route path='/members/edit/:id' component={EditMember}/>
                    <Route path='/members/newsub/:id' component={NewSub}/>
                </Switch>
            </Grid>
            </Grid>
        </div>
 
    )
}


export default MembersPage
