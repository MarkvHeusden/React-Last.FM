import { Link } from "react-router-dom";
import { StyledAlbumList, StyledAlbumItem, Artwork, ArtworkImage, ArtworkBlur } from "./styled";

const AlbumList: React.FC<AlbumListType> = ({ albums }) => {

    return ( 
        <StyledAlbumList >
            {albums.map((album, index: number) => (
                <StyledAlbumItem key={index}>
                    <Link to={`/artists/${album.url.replace('https://www.last.fm/music/', '')}`}>
                        <Artwork >
                            <ArtworkBlur src={album.image[3]['#text'] ? album.image[1]['#text'] : '/images/placeholder-album.jpeg'} alt='' />
                            <ArtworkImage src={album.image[3]['#text'] ? album.image[3]['#text'] : '/images/placeholder-album.jpeg'} alt={`${album.name} Album cover`} />
                        </Artwork>
                        <h2>{album.name}</h2>
                    </Link>
                </StyledAlbumItem>
            ))}
        </StyledAlbumList>
     );
}

type AlbumListType = {
    albums: AlbumProps[];
}

export type AlbumProps = {
    name: string;
    playcount: number;
    mbid?: string;
    url: string;
    artist: {
        name: string;
        mbid: string;
        url: string;
    },
    image: { '#text': string, size: string }[];
}
 
export default AlbumList;