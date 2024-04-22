import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import { Home } from 'lucide-react';

import HomePage from './routes/Home';
import ManageTasks from './routes/ManageTasks';
import Leaderboard from './routes/Leaderboard';
import Settings from './routes/Settings';
import Stats from './routes/Stats';
import Edit from './routes/EditTask';

import { Navbar, NavbarItem } from './components/navbar';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/manage" element={<ManageTasks />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/stats/:id" element={<Stats />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
            <Navbar>
                <NavbarItem link="/" icon={<Home />} text="Home" />
                <NavbarItem link="/manage" icon={<Home />} text="Manage" />
                <NavbarItem link="/leaderboard" icon={<Home />} text="Leaderboard" />
                <NavbarItem link="/settings" icon={<Home />} text="Settings" />
            </Navbar>
        </BrowserRouter>
    );
}

export default App;
