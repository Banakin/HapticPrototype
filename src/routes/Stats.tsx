import { ProgressBar } from '@/components/progress-display';
import Title from '@/components/title';

function Stats() {
    return (
        <>
            <Title>Stats</Title>
            <ProgressBar value={50} />
        </>
    );
}

export default Stats;
