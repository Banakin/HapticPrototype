import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/styles/App.scss';

import Home from '@/routes/Home';
import ManageTasks from '@/routes/ManageTasks';
import Leaderboard from '@/routes/Leaderboard';
import Settings from '@/routes/Settings';
import Stats from '@/routes/Stats';
import Edit from '@/routes/EditTask';
import { HabitContextProvider } from '@/contexts/HabitContext';
import Navigation from '@/components/navigation';
import { ToastContextProvider } from './contexts/ToastContext';

function App() {
    return (
        <HabitContextProvider>
            <ToastContextProvider>
                <BrowserRouter>
                    <div className="page">
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/manage" element={<ManageTasks />} />
                            <Route path="/leaderboard" element={<Leaderboard />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/stats/:id" element={<Stats />} />
                            <Route path="/edit/:id" element={<Edit />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ToastContextProvider>
        </HabitContextProvider>
    );
}

export default App;
