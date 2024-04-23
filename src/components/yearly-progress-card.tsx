import '@/styles/yearly-progress-card.scss';
import Card from '@/components/card';
import randomPercent from '@/functions/randomPercent';

type YearlyProgressCardProps = {
    title: string;
};

function YearlyProgressCard(props: YearlyProgressCardProps) {
    const { title } = props;
    const days = new Array<number>();

    for (let i = 0; i < 7 * 15; i++) {
        days.push(randomPercent());
    }

    return (
        <Card title={title}>
            <div className="yearlyprogresscard">
                {days.map((value, index) => {
                    return <div key={index} style={{ opacity: value / 100 }}></div>;
                })}
            </div>
        </Card>
    );
}

export default YearlyProgressCard;
