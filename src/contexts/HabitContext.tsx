import { ReactNode, createContext, useState } from 'react';
import { Habit } from '@/classes/Habit';

export const HabitContext = createContext({
    habits: new Map<string, Habit>(),
    setHabits: (value: Map<string, Habit>): void => {
        value;
    },
});

export function HabitContextProvider(props: { children: ReactNode }) {
    const [habits, setHabits] = useState(new Map<string, Habit>());
    const value = { habits, setHabits };

    return <HabitContext.Provider value={value}>{props.children}</HabitContext.Provider>;
}
