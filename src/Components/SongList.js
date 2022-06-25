const SongList = ({ songs }) => {

    return ( 
        <ul className="song-list">
            {songs.map((song, index) => (
                <li className="song-item" key={index}>
                    <h3>{song.name}</h3>
                    <p>Duur: {song.duration}s</p>
                </li>
            ))}
        </ul>
     );
}
 
export default SongList;