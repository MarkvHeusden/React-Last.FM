import { Link } from "react-router-dom";

const AlbumList = ({ albums }) => {

    return ( 
        <ul className="album-list">
            {albums.map((album, index) => (
                <li className="album-item" key={index}>
                    <Link to={`/artists/${album.url.replace('https://www.last.fm/music/', '')}`}>
                        <img src={album.image[3]['#text'] ? album.image[3]['#text'] : '/placeholder-album.jpeg'} alt={`${album.name} Album cover`} />
                        <h2>{album.name}</h2>
                        <p>Aantal keren {album.playcount}</p>
                    </Link>
                </li>
            ))}
        </ul>
     );
}
 
export default AlbumList;