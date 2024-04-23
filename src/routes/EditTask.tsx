import { HabitContext } from '@/HabitContext';
import { YesNoHabit } from '@/classes/Habit';
import Button from '@/components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { z } from 'zod';
import { NumberField, SelectField, TextField } from '@/components/text-fields';

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
                <TextField
                    id="display-name"
                    label="Name"
                    placeholder="Task Title"
                    defaultValue={taskItem?.name}
                    formRegister={register('name')}
                    error={errors.name}
                />

                <NumberField
                    id="statistics"
                    label="Statistics"
                    placeholder="Statistics"
                    defaultValue={taskItem?.statistics}
                    formRegister={register('statistics')}
                    error={errors.statistics}
                />

                <SelectField
                    id="type"
                    label="Habit Type"
                    defaultValue={habitType}
                    formRegister={register('type')}
                    error={errors.type}
                    options={[
                        {
                            value: 'boolean',
                            display: 'Yes/No',
                        },
                        {
                            value: 'integer',
                            display: 'Quantity',
                        },
                    ]}
                />

                <Button type="submit">Save</Button>
                <Button>Delete</Button>
            </form>
        </>
    );
}

export default EditTask;
