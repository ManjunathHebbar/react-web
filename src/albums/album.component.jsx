import React from 'react'
import './album.styles.scss'

class AlbumDisplay extends React.Component{
    constructor(){
      super()
      this.state = {
         photos:[]
      }
    }

    renderPhotoDisplay = (photo,index) =>{
        console.log(photo.title)
        return(
         <div key={index}>
            <div>{photo.title}</div>
            <img src={photo.url} alt={photo.albumId} width="100px" height="100px"/>
         </div>
        )
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${this.props.match.params.id}`)
        .then(res => res.json())
        .then(
          result => {
                this.setState({photos:result})
          },
         
          (error) => {
           this.setState({error});
        })
    }
    
    
    render(){
        const {photos} = this.state;
        return(
          <div>
          {photos.map((photo,index)=> this.renderPhotoDisplay(photo,index))}
         
          </div>
        );
    }
}

export default AlbumDisplay