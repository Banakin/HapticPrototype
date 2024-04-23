import { useParams } from 'react-router-dom';
import Title from '@/components/title';
import { useHabits } from '@/hooks/useHabits';
import { ProgressBar } from '@/components/progress-display';

function Stats() {
    const { habits } = useHabits();
    const { id } = useParams();
    const taskItem = habits.get(id!);

    return (
        <>
            <Title>{taskItem?.name}</Title>
            <ProgressBar value={taskItem!.statistics} />
            <p>{taskItem!.statistics}%</p>
        </>
    );
}

export default Stats;
