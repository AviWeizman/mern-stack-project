import {Switch,Route,Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom';
import {Switch,Route,Redirect} from 'react-router';
import {moviespage} from './movies/moviespage.js';
import subscriptions from './members/memberspage.js';

function clear()
{
    sessionStorage.clear()
    window.assign('/')
}

function mainpage(props)
{
   return(<div>
       Hi,{sessionStorage['name']}
       <button onClick = {()=>clear()}></button>
       <Link to='/movies'>
                    Movies
                </Link>
                <Link to='/members'>
                    Subscriptions
                </Link>
                <div>
    <Switch>
        <Route path='/movies' component={MoviesPage}/>
        <Route path='/members' component={Subscriptions}/>
    </Switch>

    <Redirect exact to='/movies'/>
    </div>
    


   </div>)
}

export default mainpage;

