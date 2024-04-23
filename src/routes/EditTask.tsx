import { QuantityHabit, YesNoHabit } from '@/classes/Habit';
import Button from '@/components/button';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { z } from 'zod';
import { NumberField, SelectField, TextField } from '@/components/text-fields';
import Title from '@/components/title';
import { useToast } from '@/hooks/useToast';
import { useHabits } from '@/hooks/useHabits';

const EditSchema = z.object({
    name: z.string().min(1),
    statistics: z.coerce.number().min(0).max(100),
    type: z.enum(['boolean', 'integer']),
});

type EditSchemaType = z.infer<typeof EditSchema>;

function EditTask() {
    const { habits, setHabits } = useHabits();
    const { id } = useParams();
    const taskItem = habits.get(id!);
    const navigate = useNavigate();
    const toast = useToast();

    const habitType = taskItem instanceof QuantityHabit ? 'integer' : 'boolean';

    const onSubmit = async (data: EditSchemaType) => {
        console.log('SUCCESS', data);
        toast.addToast('Task has been saved.');

        if (data.type === 'boolean') {
            const item = new YesNoHabit(data.name);
            item.statistics = data.statistics;

            setHabits(new Map(habits.set(id!, item)));
        } else if (data.type === 'integer') {
            const item = new QuantityHabit(data.name);
            item.statistics = data.statistics;

            setHabits(new Map(habits.set(id!, item)));
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EditSchemaType>({ resolver: zodResolver(EditSchema) });

    return (
        <>
            <Title>Edit</Title>
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
                    label="Completion"
                    placeholder="0 - 100"
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
                <Button
                    type="button"
                    onClick={() => {
                        habits.delete(id!);
                        setHabits(new Map(habits));
                        navigate(-1);
                        toast.addToast('Task has been deleted.');
                    }}
                >
                    Delete
                </Button>
            </form>
        </>
    );
}

export default EditTask;
