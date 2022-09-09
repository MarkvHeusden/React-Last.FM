import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from '../Nav'
import Search from '../../../pages/Search'
import Artist from '../../../pages/Artist'
import Album from '../../../pages/Album'
import Trending from '../../../pages/Trending'
import Profile from '../../../pages/Profile'
import GlobalStyle from '../../../styles'

const App = () => {
    return (
        <>
        <GlobalStyle />
            <Router>
                <div className="App">
                    <Nav />
                    <main className="content">
                        <Routes>
                            <Route path="/" element={ <Search /> }/>
                            <Route path="/artists/:artistName" element={ <Artist /> } />
                            <Route path="/artists/:artistName/:albumName" element={ <Album /> } />
                            <Route path="/trending" element={ <Trending /> } />
                            <Route path="/profile" element={ <Profile /> } />
                        </Routes>
                    </main>
                </div>
            </Router>
        </>
    )
}

export default App
