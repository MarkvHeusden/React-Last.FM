import { useParams } from "react-router-dom"
import AlbumList from "../Components/AlbumList"
import useFetch from "../Hooks/useFetch"

const Artist = () => {
    // Get artist name from url params
    const { artistName } = useParams()

    // Fetch artist & states
    const  { data: artist, isFetching, error } = useFetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=d732731be2f5f0ec4b10e5a3607d7090&format=json`)

    return ( 
        <div className="artist">
            <header>
                { error && <p>{ error }</p>}
                { isFetching && <p>Laden...</p>}
                { artist && <h1>{ artist.topalbums['@attr'].artist }</h1> }
                { artist && <span className="heading-caption">Top albums</span> }
            </header>
            { artist && <AlbumList albums={artist.topalbums.album}/> }
        </div>
     )
}
 
export default Artist;