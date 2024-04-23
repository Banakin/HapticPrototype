import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@/styles/App.scss';

import Home from '@/routes/Home';
import ManageTasks from '@/routes/ManageTasks';
import Leaderboard from '@/routes/Leaderboard';
import Settings from '@/routes/Settings';
import Stats from '@/routes/Stats';
import Edit from '@/routes/EditTask';

import { useState } from 'react';

import { Habit, YesNoHabit } from '@/classes/Habit';
import { HabitContext } from '@/HabitContext';
import Navigation from '@/components/navigation';

function App() {
    const [habits, setHabits] = useState(new Map<string, Habit>([['test-habit', new YesNoHabit('Do thing?')]]));
    const value = { habits, setHabits };

    return (
        <HabitContext.Provider value={value}>
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
        </HabitContext.Provider>
    );
}

export default App;
