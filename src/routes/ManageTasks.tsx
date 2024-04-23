import { HabitContext } from '@/HabitContext';
import Button from '@/components/button';
import ListItem from '@/components/list-item';
import Title from '@/components/title';
import { nanoid } from 'nanoid';
import { useContext } from 'react';

function ManageTasks() {
    const { habits } = useContext(HabitContext);

    return (
        <>
            <Title>Manage</Title>
            <Button to={'/edit/' + nanoid(5)}>Add</Button>

            {Array.from(habits.keys()).map((key) => {
                return (
                    <ListItem key={key} label={key}>
                        <Button to={'/stats/' + key}>Stats</Button>
                        <Button to={'/edit/' + key}>Edit</Button>
                    </ListItem>
                );
            })}
        </>
    );
}

export default ManageTasks;
