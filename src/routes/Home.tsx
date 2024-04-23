import Title from '@/components/title';
import ListItem from '@/components/list-item';
import { QuantityHabit, YesNoHabit } from '@/classes/Habit';
import CheckSelect from '@/components/check-select';
import { useHabits } from '@/hooks/useHabits';
import Button from '@/components/button';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NumberSelect from '@/components/number-select';
import { ProgressBar } from '@/components/progress-display';

function Home() {
    const { habits, setHabits } = useHabits();

    const NoItemsPrompt = () => {
        if (habits.size === 0) {
            return (
                <>
                    <p>It looks like you have no tasks!</p>
                    <Button to={'/edit/' + nanoid(5)}>
                        <FontAwesomeIcon icon={faPlus} />
                        Add Habit
                    </Button>
                </>
            );
        }
    };

    return (
        <>
            <Title>Today</Title>
            <NoItemsPrompt />
            {Array.from(habits.keys()).map((key) => {
                const item = habits.get(key);

                if (item && item instanceof YesNoHabit) {
                    return (
                        <ListItem key={key} label={item.name}>
                            <ProgressBar value={item.statistics} size="100px" />
                            <CheckSelect
                                value={item.data}
                                onValueChange={(value: boolean) => {
                                    // Update Value
                                    item.data = value;

                                    // Update habits
                                    setHabits(new Map(habits.set(key, item)));
                                }}
                            />
                        </ListItem>
                    );
                } else if (item && item instanceof QuantityHabit) {
                    return (
                        <ListItem key={key} label={item.name}>
                            <ProgressBar value={item.statistics} size="100px" />
                            <NumberSelect
                                value={item.data}
                                onValueChange={(value: number) => {
                                    // Update Value
                                    item.data = value;

                                    // Update habits
                                    setHabits(new Map(habits.set(key, item)));
                                }}
                            />
                        </ListItem>
                    );
                }
            })}
        </>
    );
}

export default Home;
