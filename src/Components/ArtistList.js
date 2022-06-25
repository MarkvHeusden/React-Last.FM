import { Link } from "react-router-dom";

const ArtistList = ({ artists }) => {

    return ( 
        <ul className="artist-list">
            {artists.map((artist, index) => (
                <li className="artist-item" key={index}>
                    <Link to={`/artists/${artist.url.replace('https://www.last.fm/music/', '')}`}>
                        <h2>{artist.name}</h2>
                    </Link>
                </li>
            ))}
        </ul>
     );
}
 
export default ArtistList;