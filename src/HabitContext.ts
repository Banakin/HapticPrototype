import { createContext } from 'react';
import { Habit, YesNoHabit } from '@/classes/Habit';

export const HabitContext = createContext({
    habits: new Map<string, Habit>([['test-habit', new YesNoHabit('Do thing?')]]),
    setHabits: (value: Map<string, Habit>): void => {
        value;
    },
});
