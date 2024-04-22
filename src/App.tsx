import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './routes/Home';
import ManageTasks from './routes/ManageTasks';
import Leaderboard from './routes/Leaderboard';
import Settings from './routes/Settings';
import Stats from './routes/Stats';
import Edit from './routes/EditTask';

import { Navbar, NavbarItem } from './components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGear, faPenToSquare, faMedal } from '@fortawesome/free-solid-svg-icons';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manage" element={<ManageTasks />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/stats/:id" element={<Stats />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
            <Navbar>
                <NavbarItem link="/" icon={<FontAwesomeIcon icon={faHouse} />} text="Home" />
                <NavbarItem link="/manage" icon={<FontAwesomeIcon icon={faGear} />} text="Manage" />
                <NavbarItem link="/leaderboard" icon={<FontAwesomeIcon icon={faPenToSquare} />} text="Leaderboard" />
                <NavbarItem link="/settings" icon={<FontAwesomeIcon icon={faMedal} />} text="Settings" />
            </Navbar>
        </BrowserRouter>
    );
}

export default App;
