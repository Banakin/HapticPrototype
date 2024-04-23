import Card from '@/components/card';
import { ProgressBar } from '@/components/progress-display';
import Title from '@/components/title';
import { useHabits } from '@/hooks/useHabits';

function Leaderboard() {
    const { habits } = useHabits();
    const totalProgress = Array.from(habits.values()).reduce((accumulator, habit) => {
        return accumulator + habit.statistics;
    }, 0);
    const possibleProgress = habits.size * 100;
    const progressPercent = (totalProgress / possibleProgress) * 100;

    function YourProgress() {
        if (habits.size > 0) {
            return (
                <Card title="Your Progress">
                    <ProgressBar value={progressPercent} />
                    <p>{Math.round(progressPercent)}%</p>
                </Card>
            );
        } else {
            return <p>It looks like you have no tasks!</p>;
        }
    }

    return (
        <>
            <Title>Leaderboard</Title>
            <YourProgress />
        </>
    );
}

export default Leaderboard;
