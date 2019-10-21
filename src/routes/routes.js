import React from 'react'
import {Route,Switch} from 'react-router-dom'
import App from '../App'
import UserProfile from '../user-profile/user-profile-component'
import AlbumDisplay from '../albums/album.component'
const Routing = () => {
    return(
   <Switch>
       <Route exact path="/" component={App}/>
       <Route path="/user-profile/:id" component={UserProfile}/>
       <Route path="/user-album/:id" component={AlbumDisplay}/>
   </Switch>
    );
}
export default Routing