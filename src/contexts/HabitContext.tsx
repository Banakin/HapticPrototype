import { ReactNode, createContext, useState } from 'react';
import { Habit, YesNoHabit } from '@/classes/Habit';

export const HabitContext = createContext({
    habits: new Map<string, Habit>(),
    setHabits: (value: Map<string, Habit>): void => {
        value;
    },
});

export function HabitContextProvider(props: { children: ReactNode }) {
    const [habits, setHabits] = useState(new Map<string, Habit>([['test-habit', new YesNoHabit('Do thing?')]]));
    const value = { habits, setHabits };

    return <HabitContext.Provider value={value}>{props.children}</HabitContext.Provider>;
}
