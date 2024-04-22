import { HabitContext } from '@/HabitContext';
import Button from '@/components/button';
import Title from '@/components/title';
import { useContext } from 'react';

function ManageTasks() {
    const { habits } = useContext(HabitContext);

    return (
        <>
            <Title>Manage</Title>
            <Button onClick={() => {}}>Button</Button>
            {Array.from(habits.keys()).map((key) => {
                return <p>{key}</p>;
            })}
        </>
    );
}

export default ManageTasks;
