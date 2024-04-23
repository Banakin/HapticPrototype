import { HabitContext } from '@/HabitContext';
import Title from '@/components/title';
import { useContext } from 'react';
import ListItem from '../components/list-item';
import { QuantityHabit, YesNoHabit } from '../classes/Habit';
import CheckSelect from '../components/check-select';

function Home() {
    const { habits, setHabits } = useContext(HabitContext);

    const NoItemsPrompt = () => {
        if (habits.size === 0) {
            return <h1>Bruh</h1>;
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
                    return <ListItem key={key} label={item.name}></ListItem>;
                }
            })}
        </>
    );
}

export default Home;
