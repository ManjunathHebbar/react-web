import React from 'react'
import '../comments/comment-display.styles.scss'

class CommentDisplay extends React.Component{

handleClick(){
  const {commentDetails} = this.props;
  console.log(commentDetails)
  return(
    <div>
       {commentDetails.map((commentDetail,index) =>
       <div key={index}>{commentDetail.body}</div> )}
    </div>
  );
}

render(){  
    return(
      <button onClick={this.handleClick()}>Comments</button>
    );
  }
}
export default CommentDisplay;