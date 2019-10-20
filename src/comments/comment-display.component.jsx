import React from 'react'
import '../comments/comment-display.styles.scss'

class CommentDisplay extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isCommentVisible : false
   }
}

handleClick = (commentDetail,index, userDetail) =>  {
  if(userDetail.id === commentDetail.postId){
  return(
    <ul key={index} className="comment-inline">
       <li>{commentDetail.body}</li>
    </ul>
  )
  }
  return null
}

handleButton=(isCommentVisible)=> {
  if(isCommentVisible === false){
    this.setState({ isCommentVisible: true})
  }
  else{
    this.setState({ isCommentVisible: false})
  }
} 


render(){
  const { isCommentVisible } = this.state
  const { CommentDetails } = this.props
  const {userDetail} = this.props
   return(
     <div className ="comment">
        <div>
         <button id = "root" className="comment-visible"
         onClick = {() => this.handleButton(isCommentVisible)}>comment
        </button>
        </div>
        <div className="comment-text"> 
          { isCommentVisible && CommentDetails && CommentDetails.map((commentDetail,index) => 
            this.handleClick(commentDetail, index, userDetail) 
          )}
        </div>
     </div>
     );
  }
}
export default CommentDisplay;