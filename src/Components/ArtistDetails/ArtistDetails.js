
import 'bootstrap/dist/css/bootstrap.css';
import  { useState,useEffect} from 'react'
const ArtistDetails=(props)=> {
    let [artistInfo,setArtistInfo]= useState({});

    const baseUrl='http://localhost:3000/artists'
   useEffect( ()=> {
       async function fetchData(){

        const response= await fetch( `${baseUrl}/${props.match.params.id}`);
        const artistsList= await response.json();
        setArtistInfo(artistsList)
       }

       fetchData();
    },[])
 

    return(
              
        

       <div  className="container justify-content-center">
           <h1>Music DB</h1>
        <hr/>

           
           <div style={{display: 'flex',justifyContent: 'center'}}><img    style={{width:'30%'}}  src={`/assets/images/covers/${artistInfo.cover}.jpg`} alt='ArtistPcture'/></div>
           
          <h1 >  {artistInfo.name}</h1>
          <div>{artistInfo.bio}</div>
          {/* <div>   {artistInfo.albums.map((album)=>{
              return <img src={`/assets/images/albums/${album.cover}.jpg`} alt="ALBUM"/>





          })}</div>
          */}



        
           
           
           
           </div>

    )






}
export default ArtistDetails 