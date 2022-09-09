import { useState, useEffect } from 'react'
import ArtistList from '../../components/modules/ArtistList'
import { SearchInput } from './styled'

const Search: React.FC = () => {
    // States
    const [input, setInput] = useState('')
    const [artistResults, setArtistResults] = useState(null)

    // Fetch artists while typing
    useEffect(() => {
        if (input) {
            fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${input}&api_key=d732731be2f5f0ec4b10e5a3607d7090&format=json`)
                .then((res) => res.json())
                .then((data) => setArtistResults(data.results.artistmatches.artist))
                .catch((err) => console.log(err.message))
        }
    }, [input])

    return (
        <div className="search">
            <header>
                <h1>Zoeken</h1>
                <SearchInput placeholder='Zoek naar artiesten' onInput={e => setInput((e.target as HTMLInputElement).value)} value={input} type="search" />
            </header>
            { artistResults && <ArtistList artists={artistResults}/> }
        </div>
    )
}

export default Search
