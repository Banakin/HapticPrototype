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
            {habits.size === 0 ? <p>It looks like you have no tasks!</p> : null}
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
                Add Habit
            </Button>
        </>
    );
}

export default ManageTasks;
