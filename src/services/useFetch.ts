import { useState, useEffect } from "react"

// Custom fetch hook
const useFetch = <T>(url: string) => {
    // States
    const [data, setData] = useState<T | null>(null)
    const [isFetching, setIsFetching] = useState<boolean>(true)
    const [error, setError] = useState<null | string>(null)

    // Fetch data
    useEffect(() => {
        // useEffect cleanup (voorkom errors bij snel veranderen van pagina)
        // const abortCont = new AbortController()

        // , { signal: abortCont.signal }
        fetch(url)
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
        // return () => abortCont.abort
    }, [url])

    return { data, isFetching, error }
}

export default useFetch