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
            {Array.from(habits.keys()).map((key) => {
                const item = habits.get(key);

                if (item)
                    return (
                        <ListItem key={key} label={item.name}>
                            <Button to={'/stats/' + key}>Stats</Button>
                            <Button to={'/edit/' + key}>Edit</Button>
                        </ListItem>
                    );
            })}

            <Button to={'/edit/' + nanoid(5)}>Add</Button>
        </>
    );
}

export default ManageTasks;
