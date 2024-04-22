import { HabitContext } from '@/HabitContext';
import Title from '@/components/title';
import { useContext } from 'react';

function ManageTasks() {
    const { habits } = useContext(HabitContext);

    return (
        <>
            <Title>Manage</Title>
            {Array.from(habits.keys()).map((key) => {
                return <p>{key}</p>;
            })}
        </>
    );
}

export default ManageTasks;
