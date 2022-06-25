import { useState, useEffect } from 'react'
import ArtistList from '../Components/ArtistList'
// import useFetch from './useFetch'

const Search = () => {
    // States
    const [input, setInput] = useState('')
    const [artistResults, setArtistResults] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    // const [error, setError] = useState(null)

    // Fetch artists while typing
    useEffect(() => {
        if (input) {
            //  const { data: artistResults, isFetching } = useFetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${input}&api_key=d732731be2f5f0ec4b10e5a3607d7090&format=json`)
            // Fetch artist & states
            setIsFetching(true)
            fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${input}&api_key=d732731be2f5f0ec4b10e5a3607d7090&format=json`)
                .then((res) => res.json())
                .then((data) => {
                    setArtistResults(data.results.artistmatches.artist)
                    setIsFetching(false)
                    // console.log(data.results.artistmatches.artist)

                })
                .catch((err) => {
                    console.log(err.message)
                    setIsFetching(false)
                })
        }
    }, [input])

    return (
        <div className="search">
            <header>
                <h1>Zoek artiesten</h1>
                <input placeholder='Bijv. Drake, Prunk, etc.' onInput={e => setInput(e.target.value)} value={input} type="search" />
            </header>
            {/* { input && <p>resultaat voor {input}</p> } */}
            {/* { isFetching && <p>Laden...</p>}  */}
            { artistResults && <ArtistList artists={artistResults}/> }
        </div>
    )
}

export default Search
