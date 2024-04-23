import { HabitContext } from '@/HabitContext';
import Button from '@/components/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { z } from 'zod';

const SignUpSchema = z.object({
    email: z.string(),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

function EditTask() {
    const { habits } = useContext(HabitContext);
    const { id } = useParams();
    const taskItem = habits.get(id!);

    const onSubmit = async (data: SignUpSchemaType) => {
        console.log('SUCCESS', data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

    return (
        <>
            <p>Edit</p>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input className="input" placeholder="email" {...register('email')} />

                {errors.email && <span>{errors.email.message}</span>}

                <p>{id}</p>
                <p>{taskItem?.name}</p>
                <p>{taskItem?.statistics}</p>
                <Button type="submit">Save</Button>
                <Button>Delete</Button>
            </form>
        </>
    );
}

export default EditTask;
