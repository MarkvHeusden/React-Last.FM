import { SongItem } from "./styled";

const SongList = ({ songs, artwork }) => {

    if (songs.length) {
        return ( 
        <ul className="song-list">
            {songs.map((song, index) => (
                <SongItem key={index}>
                    <span className="song-index">{index + 1}</span>
                    <img src={artwork ? artwork : '/placeholder-album.jpeg'} alt="Album cover" />
                    <h2>{song.name}</h2>
                    { song.duration && <div className="song-duration">
                        <span className="material-symbols-outlined">schedule</span>
                        <span>{secondsToMinutes(song.duration)}</span> 
                    </div> }
                </SongItem>
            ))}
        </ul>
     );
    } else {
        return (
        <ul className="song-list">
            <SongItem>
                <span className="song-index">1</span>
                <img src={artwork ? artwork : '/placeholder-album.jpeg'} alt="Album cover" />
                <h2>{songs.name}</h2>
                { songs.duration && <div className="song-duration">
                    <span className="material-symbols-outlined">schedule</span>
                    <span>{secondsToMinutes(songs.duration)}</span> 
                </div> }
            </SongItem>
        </ul>
        )
    }
}

const secondsToMinutes = (duration) => {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export default SongList;