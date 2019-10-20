import React from 'react'
import '../Post/display-post.styles.scss'
import CommentDisplay from '../comments/comment-display.component'
import UserProfile from '../user-profile/user-profile-component'

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
  
myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
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

callUser = (users) => {
   return(
    <UserProfile
      UserProfile = {users}
    />
   )
}

render(){
 const {userPostDetails} = this.props;
 const {comments, users} = this.state;
    return(
        <div className="flex-container">
          <div className="progress-container">
            <div className="progress-bar" id="myBar"></div>
          </div>  
              {users.length && comments.length && userPostDetails.map((userDetail,index) => 
                  <div className="user-card" key={index}>
                      <button onClick={this.callUser(users)} className="name">
                         {this.username(users, userDetail)}
                      </button>
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
                
                {window.onscroll = () => {this.myFunction()}}
         </div>
      );
   }
}

export default DisplayPostDetail;