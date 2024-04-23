import { HabitContext } from '@/contexts/HabitContext';
import { useContext } from 'react';

export function useHabits() {
    return useContext(HabitContext);
}
