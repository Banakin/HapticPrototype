import Card from '@/components/card';
import ListItem from '@/components/list-item';
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

    const friends = [
        {
            name: 'Emily Rodriguez',
            progress: Math.floor(Math.random() * 100),
        },
        {
            name: 'Marcus Johnson',
            progress: Math.floor(Math.random() * 100),
        },
        {
            name: 'Sofia Patel',
            progress: Math.floor(Math.random() * 100),
        },
        {
            name: 'Caleb Nguyen',
            progress: Math.floor(Math.random() * 100),
        },
        {
            name: 'Isabella Campbell',
            progress: Math.floor(Math.random() * 100),
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

            <Title small={true}>Friends</Title>
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
