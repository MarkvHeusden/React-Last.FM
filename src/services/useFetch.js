import { useState, useEffect } from "react"

// Custom fetch hook
const useFetch = (url) => {
    // States
    const [data, setData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState(null)

    // Fetch data
    useEffect(() => {
        // useEffect cleanup (voorkom errors bij snel veranderen van pagina)
        const abortCont = new AbortController()

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) throw Error('Data ophalen mislukt')
                return res.json()
            })
            .then((data) => {
                if (data.error) throw Error('Geen informatie beschikbaar')
                setData(data)
                setIsFetching(false)
                setError(null)

            })
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setError(err.message)
                    setIsFetching(false)
                }
            })
        return () => abortCont.abort
    }, [url])

    return { data, isFetching, error }
}

export default useFetch