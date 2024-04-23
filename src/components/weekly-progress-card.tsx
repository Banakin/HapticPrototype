import '@/styles/weekly-progress-card.scss';
import { ProgressBar } from '@/components/progress-display';
import Card from '@/components/card';

type WeeklyProgressCardProps = {
    title: string;
    values: number[];
};

function WeeklyProgressCard(props: WeeklyProgressCardProps) {
    const { title, values } = props;
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <Card title={title}>
            <div className="weeklyprogresscard">
                {values.map((value, index) => {
                    return (
                        <div key={index}>
                            <ProgressBar value={value} size="100px" vertical={true} />
                            <p>{days[index]}</p>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}

export default WeeklyProgressCard;
