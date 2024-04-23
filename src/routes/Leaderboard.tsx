import Card from '@/components/card';
import ListItem from '@/components/list-item';
import { ProgressBar } from '@/components/progress-display';
import Title from '@/components/title';
import randomPercent from '@/functions/randomPercent';
import { useHabits } from '@/hooks/useHabits';

function Leaderboard() {
    const { habits } = useHabits();
    const totalProgress = Array.from(habits.values()).reduce((accumulator, habit) => {
        return accumulator + habit.statistics;
    }, 0);
    const possibleProgress = habits.size * 100;
    const progressPercent = (totalProgress / possibleProgress) * 100;

    const friends = [
        {
            name: 'Emily Rodriguez',
            progress: randomPercent(),
        },
        {
            name: 'Marcus Johnson',
            progress: randomPercent(),
        },
        {
            name: 'Sofia Patel',
            progress: randomPercent(),
        },
        {
            name: 'Caleb Nguyen',
            progress: randomPercent(),
        },
        {
            name: 'Isabella Campbell',
            progress: randomPercent(),
        },
    ];

    function YourProgress() {
        if (habits.size > 0) {
            return (
                <Card title="Your Progress">
                    <ProgressBar value={progressPercent} size="100%" />
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

            <Title small>Friends</Title>
            {friends.map((friend) => {
                return (
                    <ListItem key={friend.name} label={friend.name}>
                        <ProgressBar value={friend.progress} size="100px" />
                        <p>{friend.progress}%</p>
                    </ListItem>
                );
            })}
        </>
    );
}

export default Leaderboard;
