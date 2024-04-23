import Button from '@/components/button';
import ListItem from '@/components/list-item';
import Title from '@/components/title';
import { nanoid } from 'nanoid';
import { useHabits } from '@/hooks/useHabits';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ManageTasks() {
    const { habits } = useHabits();

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

            <Button to={'/edit/' + nanoid(5)}>
                <FontAwesomeIcon icon={faPlus} />
                Add Task
            </Button>
        </>
    );
}

export default ManageTasks;
