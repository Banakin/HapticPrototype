import '@/styles/progress-display.scss';

type ProgressProps = {
    value: number;
    vertical?: boolean;
};

export function ProgressBar(props: ProgressProps) {
    const { value, vertical } = props;

    if (vertical) {
        return (
            <div className={`progressbar ${vertical ? 'progressbarvertical' : ''}`}>
                <div className="progressbarinner" style={{ height: value + '%' }}></div>
            </div>
        );
    } else {
        return (
            <div className={`progressbar ${vertical ? 'progressbarvertical' : ''}`}>
                <div className="progressbarinner" style={{ width: value + '%' }}></div>
            </div>
        );
    }
}
