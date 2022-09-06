import { Link } from "react-router-dom";
import { ArtistItem } from "./styled";

const ArtistList = ({ artists }) => {

    return ( 
        <ul className="artist-list">
            {artists.map((artist, index) => (
                <ArtistItem key={index}>
                    <Link to={`/artists/${artist.url.replace('https://www.last.fm/music/', '')}`}>
                    <span className="material-symbols-outlined">music_note</span>
                        <h2>{artist.name}</h2>
                    </Link>
                </ArtistItem>
            ))}
        </ul>
     );
}
 
export default ArtistList;