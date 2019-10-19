import React from 'react'
import '../Post/display-post.styles.scss'
import CommentDisplay from '../comments/comment-display.component'

class DisplayPostDetail extends React.Component{
  constructor(){
    super()
    this.state = {
      comments:[]
    }
  }

  renderCardView(userDetail,index){
    window.onscroll = function() {myFunction()};
    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }
    const {comment} = this.state
    return(
      
      <div className="user-card" key={index}>
          <div className="name">{userDetail.id}</div>
          <div className="title" ><strong>Title:</strong>{userDetail.title}</div>
          <div className="description"><strong>Description: </strong>{userDetail.body}</div>
          <div><CommentDisplay
             Comment = {comment}
          /></div>
      </div>
   
    );
  }

  initial(){
      this.fetchComentDetails();
   }

    fetchComentDetails(){
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then(res => res.json())
        .then(
          result => {
             this.setState({comment:result})
          },
  
          (error) => {
            this.setState({error});
          })
    }
    
  
    componentDidMount(){
      this.initial();
    }
    
    render(){
 
    const {userPostDetails} = this.props;
    console.log(userPostDetails);
    return(
        <div className="flex-container">
          <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>  
        {userPostDetails.map((userDetail,index) => this.renderCardView(userDetail,index))}
       </div>
      );
    }
 }
export default DisplayPostDetail;