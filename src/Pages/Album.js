import { useParams } from "react-router-dom";
import SongList from "../Components/SongList";
import useFetch from "../Hooks/useFetch";


const Album = () => {
    // Get artist name & album name from url params
    const { artistName, albumName } = useParams()

     // Fetch album & states
     const  { data: album, isFetching, error } = useFetch(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d732731be2f5f0ec4b10e5a3607d7090&artist=${artistName}&album=${albumName}&format=json`)

     return ( 
         <div className="album">
            <header>
                { error && <p>{ error }</p>}
                { isFetching && <p>Laden...</p>}
                { album && <h1>{ album.album.name }</h1> }
                { album && <span className="heading-caption">{ album.album.artist }</span> }
            </header>
             { album && <SongList artwork={album.album.image[1]['#text']} songs={album.album.tracks.track}/> }
         </div>
      )
}
 
export default Album;