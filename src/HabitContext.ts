import { createContext } from 'react';
import { Habit } from '@/classes/Habit';

export const HabitContext = createContext({
    habits: new Map<string, Habit>(),
    setHabits: (value: Map<string, Habit>): void => {
        value;
    },
});
