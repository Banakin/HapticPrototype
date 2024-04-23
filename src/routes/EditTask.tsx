import { HabitContext } from '@/HabitContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

function EditTask() {
    const { habits } = useContext(HabitContext);
    const { id } = useParams();
    const taskItem = habits.get(id!);

    return (
        <>
            <p>Edit</p>
            <p>{id}</p>
            <p>{taskItem?.name}</p>
            <p>{taskItem?.statistics}</p>
        </>
    );
}

export default EditTask;
