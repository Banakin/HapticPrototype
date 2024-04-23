import { HabitContext } from '@/HabitContext';
import { YesNoHabit } from '@/classes/Habit';
import Button from '@/components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { z } from 'zod';

const EditSchema = z.object({
    name: z.string().min(1),
    statistics: z.coerce.number().min(0).max(100),
    type: z.enum(['boolean', 'integer']),
});

type EditSchemaType = z.infer<typeof EditSchema>;

function EditTask() {
    const { habits } = useContext(HabitContext);
    const { id } = useParams();
    const taskItem = habits.get(id!);

    const habitType = taskItem instanceof YesNoHabit ? 'boolean' : 'integer';

    const onSubmit = async (data: EditSchemaType) => {
        console.log('SUCCESS', data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditSchemaType>({ resolver: zodResolver(EditSchema) });

    return (
        <>
            <p>Edit</p>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label form="display-name">Name</label>
                <input
                    id="display-name"
                    className="input"
                    placeholder="Task Title"
                    defaultValue={taskItem?.name}
                    {...register('name')}
                />
                {errors.name && <span>{errors.name.message}</span>}

                <label form="statistics">Statistics</label>
                <input
                    id="statistics"
                    type="number"
                    className="input"
                    placeholder="Statistics"
                    defaultValue={taskItem?.statistics}
                    {...register('statistics')}
                />
                {errors.statistics && <span>{errors.statistics.message}</span>}

                <label form="type">Statistics</label>
                <select id="type" defaultValue={habitType} {...register('type')}>
                    <option value="boolean">Yes/No</option>
                    <option value="integer">Quantity</option>
                </select>
                {errors.type && <span>{errors.type.message}</span>}

                <Button type="submit">Save</Button>
                <Button>Delete</Button>
            </form>
        </>
    );
}

export default EditTask;
