import { HabitContext } from '@/HabitContext';
import Button from '@/components/button';
import Title from '@/components/title';
import { nanoid } from 'nanoid';
import { useContext } from 'react';

function ManageTasks() {
    const { habits } = useContext(HabitContext);

    return (
        <>
            <Title>Manage</Title>
            <Button to={'/edit/' + nanoid(5)}>Button</Button>
            {Array.from(habits.keys()).map((key) => {
                return <p key={key}>{key}</p>;
            })}
        </>
    );
}

export default ManageTasks;
