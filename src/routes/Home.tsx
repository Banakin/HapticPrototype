import { HabitContext } from '@/HabitContext';
import Title from '@/components/title';
import { useContext } from 'react';

function Home() {
    const { habits } = useContext(HabitContext);

    return (
        <>
            <Title>Today</Title>
            {Array.from(habits.keys()).map((key) => {
                return <p key={key}>{key}</p>;
            })}
        </>
    );
}

export default Home;
