import { useParams } from 'react-router-dom';
import Title from '@/components/title';
import { useHabits } from '@/hooks/useHabits';
import { ProgressBar } from '@/components/progress-display';
import Card from '@/components/card';
import WeeklyProgressCard from '@/components/weekly-progress-card';
import randomPercent from '@/functions/randomPercent';
import YearlyProgressCard from '@/components/yearly-progress-card';

function Stats() {
    const { habits } = useHabits();
    const { id } = useParams();
    const taskItem = habits.get(id!);

    const weeklyStats = [
        randomPercent(),
        randomPercent(),
        randomPercent(),
        randomPercent(),
        randomPercent(),
        randomPercent(),
        randomPercent(),
    ];

    return (
        <>
            <Title>{taskItem?.name}</Title>
            <Card title="Todays Progress">
                <ProgressBar value={taskItem!.statistics} size="100%" />
                <p>{taskItem!.statistics}%</p>
            </Card>
            <WeeklyProgressCard title="Weekly Progress" values={weeklyStats} />
            <YearlyProgressCard title="Yearly Progress" />
        </>
    );
}

export default Stats;
