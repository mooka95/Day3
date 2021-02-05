import React, { Component } from 'react';
import './Home.css'
import { Link } from "react-router-dom"


export default class Home extends Component {
    
    constructor(props){
        super()
        this.state={

            artists:[]
              
        }
        this.baseURL='http://localhost:3000/artists'



    }

    renderArtists(aristList){
        console.log(aristList)
      

     if(aristList.length>0){
         
          return aristList.map((artist) =>{

           

                return <div  style={{marginTop:'20px',borderColor:'black',backgroundColor:'black'}}  className="card" key={artist.id}>
                    <img className="card-img-top" src={`./assets/images/covers/${artist.cover}.jpg`}  alt="ArtistImage"/>
                    <div className="card-body">
                    <Link  style={{width:'100%'}}  to={`/ArtistDetails/${artist.id}`} className="btn btn-primary">{artist.name}</Link>
                       
                    </div>
                </div>



          })

     }

     return <div>



         <p>No Students Avilable</p>
        
     </div>


         
    }

    render(){


   return <div  style={{backgroundColor:'grey'}} className="container-fluid">
       <div> <img src='./assets/images/cover.png' alt='cover' className="col-lg"/></div>

       {/* <div className='test' style={{backgroundImage:('./assets/images/cover.png')}}>ssssssssssss</div> */}
       
       <h1>Browse The Artists</h1>
       
  <div>{this.renderArtists(this.state.artists)}</div>
            
       </div>

    }
    async componentDidMount() {
        const response= await fetch(this.baseURL,{method:'GET'});
        const artistsList= await response.json();

        this.setState({artists:artistsList});
        





    }





}