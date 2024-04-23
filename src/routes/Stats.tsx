import { useParams } from 'react-router-dom';
import Title from '@/components/title';
import { useHabits } from '@/hooks/useHabits';
import { ProgressBar } from '@/components/progress-display';
import Card from '@/components/card';

function Stats() {
    const { habits } = useHabits();
    const { id } = useParams();
    const taskItem = habits.get(id!);

    return (
        <>
            <Title>{taskItem?.name}</Title>
            <Card title="Progress">
                <ProgressBar value={taskItem!.statistics} />
                <p>{taskItem!.statistics}%</p>
            </Card>
        </>
    );
}

export default Stats;
