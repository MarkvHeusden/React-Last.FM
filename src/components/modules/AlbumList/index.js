import { Link } from "react-router-dom";
import { StyledAlbumList, StyledAlbumItem } from "./styled";

const AlbumList = ({ albums }) => {

    return ( 
        <StyledAlbumList>
            {albums.map((album, index) => (
                <StyledAlbumItem key={index}>
                    <Link to={`/artists/${album.url.replace('https://www.last.fm/music/', '')}`}>
                        <div className="artwork" >
                            <img className="artwork-shadow" src={album.image[3]['#text'] ? album.image[1]['#text'] : '/images/placeholder-album.jpeg'} alt='' />
                            <img className="artwork-image" src={album.image[3]['#text'] ? album.image[3]['#text'] : '/images/placeholder-album.jpeg'} alt={`${album.name} Album cover`} />
                        </div>
                        <h2>{album.name}</h2>
                    </Link>
                </StyledAlbumItem>
            ))}
        </StyledAlbumList>
     );
}
 
export default AlbumList;