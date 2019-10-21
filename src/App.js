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
     <div className="App">
      {/* <div className="progress-container">
      <div className="progress-bar" id="myBar"></div>
      {window.onscroll = () => {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("myBar").style.width = scrolled + "%";}}
      </div> */}
       {userPostDetails.length ?
        <DisplayPostDetail
          userPostDetails = {userPostDetails}
        /> : null}
           
        
     </div>
    );
}
}
export default App
