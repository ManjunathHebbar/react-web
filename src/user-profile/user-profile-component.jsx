import React from 'react'
import './user-profile.styles.scss'
import {Link} from 'react-router-dom';
class UserProfile extends React.Component{
constructor(props){
  super(props)
  this.state = {
     users : [],
     albums : []
  }
}

componentDidMount(){

  fetch(`https://jsonplaceholder.typicode.com/users?id=${this.props.match.params.id}`)
  .then(res => res.json())
  .then(
    result => {
      this.setState({users:result})
    },

   fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.props.match.params.id}`)
   .then(res => res.json())
   .then(
    result => {
      this.setState({albums:result})
    },
    
    (error) => {
      this.setState({error});
    }))
}

renderUserProfile = (userProfile,index) =>{
   return(
        <div key={index}>
            <div className="username">{userProfile.username}</div>
            <div className="email">{userProfile.email}</div>
            <div className="address">
                    <div className="street">{userProfile.address.street}</div>
                    <div className="email">{userProfile.address.suite}</div>
                    <div className="city">{userProfile.address.city}</div>
                    <div className="zipcode">{userProfile.address.zipcode}</div>
            </div>
         </div>
    )
}

renderUserAlbums = (album, index) => {
  return(
     <div key={index}>
        <Link to = {`/user-album/${album.userId}`}>
            <button className="image-title">{album.title}</button> 
        </Link>
     </div>
   )
}

render(){
   const {users} = this.state;
   const {albums} = this.state;
   console.log(albums)
   return(
     <div>
        <div>
            {users.map((userProfile,index) => this.renderUserProfile(userProfile,index))}
        </div>
        <div>
            {albums.map((album,index) => this.renderUserAlbums(album,index))}
        </div>
     </div>
   );
 }
}
export default UserProfile