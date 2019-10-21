import React from 'react'
import '../Post/display-post.styles.scss'
import CommentDisplay from '../comments/comment-display.component'
import {Link} from 'react-router-dom' 

class DisplayPostDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comments: [],
      users: []
    }
  }

  componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/comments/")
    .then(res => res.json())
    .then(
      result => {
         this.setState({comments:result})
      },

      (error) => {
        this.setState({error});
      })

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(
      result => {
         this.setState({users:result})
      },

      (error) => {
        this.setState({error});
      })
}
  


username = (users, userDetail) => {
    let name = "";
    users.map((user) => {
    if(user.id === userDetail.userId){
        name = user.name
      }
     return null
    }
    )
    return name
  }



render(){
 const {userPostDetails} = this.props;
 const {comments, users} = this.state;
 
    return(
        <div className="flex-container">
              {users.length && comments.length && userPostDetails.map((userDetail,index) => 
                  <div className="user-card" key={index}>
                      <Link to={`/user-profile/${userDetail.userId}`}>
                      <button className="name">
                         {this.username(users, userDetail)}
                      </button>
                      </Link>
                      <div className="title" ><strong>Title:</strong>{userDetail.title}</div>
                      <div className="description"><strong>Description: </strong>{userDetail.body}</div>
                      <div>
                        <CommentDisplay 
                        CommentDetails  = {comments}
                        userDetail = {userDetail}
                        /> 
                      </div>
                  </div>
                   
                )}
             
            </div>
          );
      
   }
}

export default DisplayPostDetail;