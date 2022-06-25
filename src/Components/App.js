import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Search from '../Pages/Search'
import Artist from '../Pages/Artist'
import Album from '../Pages/Album'
import Trending from '../Pages/Trending'
import Profile from '../Pages/Profile'

const App = () => {
    return (
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
    )
}

export default App
