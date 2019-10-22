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
            <div key={index} className="album-title-image">
                <img className="album-image" src={photo.url} alt={photo.albumId} width= "300px" height="300px"/>
                <div className="album-title"><strong>title: </strong>{photo.title}</div>
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
          <div className="album">
          {photos.map((photo,index)=> this.renderPhotoDisplay(photo,index))}
         
          </div>
        );
    }
}

export default AlbumDisplay