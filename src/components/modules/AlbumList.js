import { Link } from "react-router-dom";

const AlbumList = ({ albums }) => {

    return ( 
        <ul className="album-list">
            {albums.map((album, index) => (
                <li className="album-item" key={index}>
                    <Link to={`/artists/${album.url.replace('https://www.last.fm/music/', '')}`}>
                        <div className="artwork" >
                            <img className="artwork-shadow" src={album.image[3]['#text'] ? album.image[1]['#text'] : '/images/placeholder-album.jpeg'} alt='' />
                            <img className="artwork-image" src={album.image[3]['#text'] ? album.image[3]['#text'] : '/images/placeholder-album.jpeg'} alt={`${album.name} Album cover`} />
                        </div>
                        <h2>{album.name}</h2>
                    </Link>
                </li>
            ))}
        </ul>
     );
}
 
export default AlbumList;