import { useParams } from "react-router-dom";
import SongList from "../../components/modules/SongList";
import useFetch from "../../services/useFetch";
import { SongProps } from "../../components/modules/SongList";


const Album: React.FC = () => {
    // Get artist name & album name from url params
    const { artistName, albumName } = useParams()

     // Fetch album & states
     const  { data: album, isFetching, error } = useFetch<AlbumProps>(`https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d732731be2f5f0ec4b10e5a3607d7090&artist=${artistName}&album=${albumName}&format=json`)

     return ( 
         <div className="album">
            <header>
                { error && <p>{ error }</p>}
                { isFetching && <p>Laden...</p>}
                { album && <h1>{ album.album.name }</h1> }
                { album && <span className="heading-caption">{ album.album.artist }</span> }
            </header>
             { album && 'tracks' in album.album && <SongList artwork={album.album.image[1]['#text']} songs={album.album.tracks.track}/> }
             { album && !('tracks' in album.album) && <p>Geen nummers gevonden</p> }
         </div>
      )
}

type AlbumProps = { 
    album: {
        tracks: {
            track: SongProps[];
        }
        "@attr": {
            artist: string;
            page: number;
            perPage: number;
            totalPages: number;
            total: number;
        }
        name: string;
        artist: string;
        image: {
            size: string;
            '#text': string;
        }[]
    }
}
 
export default Album;