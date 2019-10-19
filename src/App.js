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


  initial(){
     this.fetchUserDetails();
  }

  fetchUserDetails(){
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

  componentDidMount(){
    this.initial();
  }

  render(){ 
    const {userPostDetails} = this.state;
    console.log(userPostDetails)
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
