import React from 'react';
import DisplayPostDetail from './Post/display-post.component'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      userPostDetails:[]
    }
 }

componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        result => {
          this.setState({userPostDetails:result});
        },

        (error) => {
          this.setState({error});
        })
  }

  render(){ 
    const {userPostDetails} = this.state;
    return (
     <div>
       {userPostDetails.length ?
        <DisplayPostDetail
          userPostDetails = {userPostDetails}
        /> : null}
     </div>
    );
}
}
export default App
